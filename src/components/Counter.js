import React from 'react'
import User from './User';

export default class Counter extends React.Component {
    render() {
        const { count, onIncreaseClick,onDecreaseClick,onChange } = this.props;
        return (
            <div>
                <span>{count}</span>
                <button onClick={()=>onIncreaseClick(2)}>Increase</button>
                <button onClick={()=>onDecreaseClick(1)}>Decrease</button>
                <User onChange={onChange} />
            </div>
        )
    }
}
