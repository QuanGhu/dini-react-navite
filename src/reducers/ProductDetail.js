export default (state = null, action) => {
    switch (action.type) {
        case 'get_product_detail' :
            return {...state, product : action.data }
        default:
            return state;
    }
}