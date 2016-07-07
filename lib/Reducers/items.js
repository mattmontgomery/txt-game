import items from 'Constants/items';

const initialState = { ...items };

export default function inventory(state = initialState, { type }) {
    switch(type) {
        default:
            return state;
    }
}
