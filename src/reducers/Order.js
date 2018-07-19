const baseState = {
    name : '',
    address : '',
    data : ''
}

export default (state = baseState, action) => {
    switch (action.type) {
        case 'get_history' :
            return { ...state, data : action.data}
        case 'change_name' :
            return {...state, name : action.data}
        case 'change_address' :
            return {...state, address : action.data}
        default:
            return state;
    }
}