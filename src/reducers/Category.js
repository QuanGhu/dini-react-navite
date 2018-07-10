export default (state = null, action) => {
    switch (action.type) {
        case 'get_categories' :
            return action.data
        default:
            return state;
    }
}