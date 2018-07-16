export default (state = null, action) => {
    switch (action.type) {
        case 'get_cart_list' :
            return action.data
        default:
            return state;
    }
}