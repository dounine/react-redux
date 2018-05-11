import React from 'react'
import Counter from "./Counter";
import {connect} from "react-redux";
import {increaseAction,decreaseAction,changeAction} from "../actions";

//state 在 props中的显示
function mapStateToProps(state) {
    return {
        ...state,
        // value: state.count,
        // username:state.username
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (value) => dispatch(increaseAction(value)),
        onDecreaseClick: (value) => dispatch(decreaseAction(value)),
        onChange:(username) => dispatch(changeAction(username)),
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default App;