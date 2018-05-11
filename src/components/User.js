import React from 'react'

export default class User extends React.Component {
    render() {
        const { username, onChange } = this.props;
        return (
            <div>
                <button onClick={()=>onChange('lake')}>change username</button>
                <h1>{username}</h1>
            </div>
        )
    }
}
