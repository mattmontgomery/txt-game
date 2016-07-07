import nlp from 'nlp_compromise';
import Verbs, { movementVerbs } from 'Constants/verbs';
import Items from 'Constants/items';
import _ from 'lodash';

import store from 'store';

function isDirectional(text) {
    return !!movementVerbs[text];
}
function getDirection(text) {
    return movementVerbs[text];
}

export default function parse(text) {
    return (dispatch) => {
        const { inventory } = store.getState();
        text = text.toLowerCase();
        if(isDirectional(text)) {
            dispatch({
                type: getDirection(text)
            });
            return;
        }
        const parsedText = nlp.text(text);
        const { sentences } = parsedText;
        const verbs = _.flatten(sentences.map(sentence => {
            const { terms } = sentence;
            return terms.map((term) => term).filter(({pos}) => pos.Verb).map(term => term.text);
        }));
        const nouns = _.flatten(sentences.map(sentence => {
            const { terms } = sentence;
            return terms.map((term) => term).filter(({pos}) => pos.Noun).map(term => term.text);
        }));
        const actionsTaken = verbs.map(v => Verbs[v]).filter(verb => !!verb);
        const objectsInteractedWith = nouns.map(i => Items[i]).filter(item => !!item);
        objectsInteractedWith.forEach(item => {
            if(actionsTaken.indexOf('get') > -1 && item.gettable && inventory.indexOf(item) === -1) {
                dispatch({
                    type: 'INVENTORY_ADD_ITEM',
                    payload: item
                });
            } else if(actionsTaken.indexOf('drop') > -1) {
                dispatch({
                    type: 'INVENTORY_REMOVE_ITEM',
                    payload: item
                });
            }
        });
    }
}
