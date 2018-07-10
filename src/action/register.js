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

export const nameChanged = (text) => {
    return {
        type : 'name_changed',
        data : text
    }
}

export const doRegister = () => {
    return {
        type : 'register_process'
    }
}

export const registerDone = () => {
    return {
        type : 'register_done'
    }
}