export default function clearMessage() {
    return (dispatch) => {
        dispatch({
            type: 'MESSAGE_CLEAR',
        });
    }
}
