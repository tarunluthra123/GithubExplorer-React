import React from "react";

class Search3 extends React.Component {

    handleKeyDown = (e) => {
        if (e.keyCode !== 13) return
        const value = e.target.value
        alert('Value is ' + value)
    }

    render() {
        return (
            <div>
                <input onKeyDown={this.handleKeyDown} type="text" name='username' placeholder='Enter username'/>
            </div>
        )
    }
}

export default Search3