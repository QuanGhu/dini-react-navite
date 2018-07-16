
export default (state = null, action) => {
    switch (action.type) {
        case 'get_product_detail' :
            return {...state, product : action.data, loading : false }
        case 'on_add_to_cart' :
            return {...state, loading : true }
        case 'did_add_to_cart' :
            return {...state, loading : false }
        default:
            return state;
    }
}