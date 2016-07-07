const initialState = [];

export default function inventory(state = initialState, { type, payload }) {
    switch(type) {
        case 'INVENTORY_ADD_ITEM':
            if(state.indexOf(payload) > -1) {
                return state;
            }
            return [
                ...state,
                payload
            ];
        case 'INVENTORY_REMOVE_ITEM':
            if(state.indexOf(payload) === -1) {
                return state;
            }
            return [
                ...state.slice(0, state.indexOf(payload)),
                ...state.slice(state.indexOf(payload) + 1),
            ];
        default:
            return state;
    }
}
