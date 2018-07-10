export default (state = null, action) => {
    switch (action.type) {
        case 'get_product' :
            return action.data
        default:
            return state;
    }
}