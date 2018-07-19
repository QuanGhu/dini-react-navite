export const getHistory = (data) => {
    return {
        type : 'get_history',
        data : data
    }
}

export const changeName = (data) => {
    return {
        type : 'change_name',
        data : data
    }
}

export const changeAddress = (data) => {
    return {
        type : 'change_address',
        data : data
    }
}
