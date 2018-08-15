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

export const changeMethod = (data) => {
    return {
        type : 'change_method',
        data : data
    }
}

export const changeOngkir = (data) => {
    return {
        type : 'change_ongkir',
        data : data
    }
}
