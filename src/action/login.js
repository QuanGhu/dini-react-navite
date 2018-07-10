export const emailChanged = (text) => {
    return {
        type : 'email_changed',
        data : text
    }
}

export const passwordChanged = (text) => {
    return {
        type : 'password_changed',
        data : text
    }
}

export const doLogin = (text) => {
    return {
        type : 'login_process',
        data : text
    }
}

export const saveToken = (text) => {
    return {
        type : 'save_token',
        data : text
    }
}

export const loginDone = () => {
    return {
        type : 'login_done'
    }
}