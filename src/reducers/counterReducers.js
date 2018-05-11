const todos = (state = { count: 0 ,username:'hi'}, action) => {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + action.value }
        case 'decrease':
            return { count: count - action.value }
        case 'change':
            return { username: action.username }
        default:
            return state
    }
}

export default todos