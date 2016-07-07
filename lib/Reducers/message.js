const initialState = '';

export default function message(state = initialState, { type, payload }) {
    switch(type) {
        case 'INVENTORY_ADD_ITEM':
            return `You pick up the ${payload.label}.`;
        case 'MESSAGE_CLEAR':
            return '';
        case 'MESSAGE_SET':
            return payload;
        default:
            return state;
    }
}
