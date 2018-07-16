const default_state = {
    login : false
}

export default (state = default_state, action) => {
    switch (action.type) {
        case 'get_profile_data' :
            return { ...state, profile : action.data }
        case 'user_login' :
            return { ...state, login : true } 
        default:
            return state;
    }
}