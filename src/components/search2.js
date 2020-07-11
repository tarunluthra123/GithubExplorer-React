import React from "react";

class Search2 extends React.Component {
    inputRef = React.createRef()

    handleClick = () => {
        const value = this.inputRef.current.value

        alert('Value is ' + value)
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" name='username' placeholder='Enter username'/>
                <button onClick={this.handleClick}>
                    Click
                </button>
            </div>
        )
    }
}

export default Search2