const defaultState = {
    old_password : null,
    new_password : null,
    confirm_password : null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'onchange_old_password' :
            return {...state , old_password : action.data}
        case 'onchange_new_password' :
            return {...state , new_password : action.data}
        case 'onchange_confirm_password' :
            return {...state , confirm_password : action.data}
        default:
            return state;
    }
}