import React from "react";

class UserCard extends React.Component {
    render() {
        const user = this.props.user
        return (
            <div className="card">
                <div className="card-body">
                    <img src={user.avatar_url} alt="User Avatar"/>
                    <h1>{user.name}</h1>
                    <p>{user.company}</p>
                    <p>{user.bio}</p>
                </div>
            </div>
        )
    }
}

export default UserCard