const baseState = {
    name : '',
    address : '',
    payment_method: '',
    ongkir : '',
    data : ''
}

export default (state = baseState, action) => {
    switch (action.type) {
        case 'get_history' :
            return { ...state, data : action.data }
        case 'change_name' :
            return {...state, name : action.data }
        case 'change_address' :
            return {...state, address : action.data }
        case 'change_method' :
            return {...state, payment_method : action.data }
        case 'change_ongkir' :
            return {...state, ongkir : action.data }
        default:
            return state;
    }
}