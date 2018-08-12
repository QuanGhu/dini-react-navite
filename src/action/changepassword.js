
export const onChangeOldPassword = (data) => {
    return {
        type : 'onchange_old_password',
        data : data
    }
}

export const onChangeNewPassword = (data) => {
    return {
        type : 'onchange_new_password',
        data : data
    }
}

export const onChangeConfirmPassword = (data) => {
    return {
        type : 'onchange_confirm_password',
        data : data
    }
}