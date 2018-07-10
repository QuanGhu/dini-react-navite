const default_state = {
    application_key : 'sUK@NG%4JuqcjVDmBzjxx9NzK',
    email : '',
    password : '',
    loading : false
}

export default (state = default_state, action) => {
    switch (action.type) {
        case 'email_changed' :
            return { ...state, email : action.data }
        case 'password_changed' :
            return { ...state, password : action.data }
        case 'login_process' :
            return { ...state, loading :true }
        case 'login_done' : 
            return { ...state, loading : false }
        default:
            return state;
    }
}