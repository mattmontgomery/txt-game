export default function addItem(item) {
    dispatch({
        type: 'INVENTORY_ADD_ITEM',
        payload: {
            name: item
        }
    });
}
