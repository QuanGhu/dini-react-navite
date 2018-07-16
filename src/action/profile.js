export const getProfileData = (text) => {
    return {
        type : 'get_profile_data',
        data : text
    }
}

export const userLogin = () => {
    return {
        type : 'user_login'
    }
}
