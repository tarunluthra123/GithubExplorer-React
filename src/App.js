import React from 'react';
import './App.css';
import Search from "./components/search";
// import Search2 from "./components/search2";
// import Search3 from "./components/search3";

class App extends React.Component {
    state = {
        user: null
    }

    fetchUserData = async (username) => {
        //Fetch Github API
        try {
            const res = await fetch('https://api.github.com/users/' + username)
            if (res.ok) {
                const data = await res.json()
                // console.log(data)
                return this.setState({
                    user: data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Search fetchData={this.fetchUserData}/>
        );
    }
}

export default App;
