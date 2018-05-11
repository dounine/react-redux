module.exports = {
    increaseAction: value => ({type: 'increase', value}),
    decreaseAction: value => ({type: 'decrease', value}),
    changeAction: username => ({type: 'change', username}),
}
