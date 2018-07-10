const default_state = {
    fullname : '',
    email : '',
    password : '',
    role_id : '3',
    loading : false,
    token : ''
}

export default (state = default_state, action) => {
    switch (action.type) {
        case 'email_changed' :
            return { ...state, email : action.data }
        case 'password_changed' :
            return { ...state, password : action.data }
        case 'name_changed' :
            return { ...state, fullname : action.data }
        case 'register_process' :
            return { ...state, loading :true }
        case 'register_done' : 
            return { ...state, loading : false }
        case 'login_process' :
            return { ...state, loading :true }
        case 'save_token' :
            return {...state, token : action.data}
        case 'login_done' : 
            return { ...state, loading : false }
        default:
            return state;
    }
}