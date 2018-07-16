export const getDetail = (data) => {
    return {
        type : 'get_product_detail',
        data : data
    }
}

export const onAddToCart = () => {
    return {
        type : 'on_add_to_cart'
    }
}

export const didAddToCart = () => {
    return {
        type : 'did_add_to_cart'
    }
}