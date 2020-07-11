import React from 'react';
import './App.css';
import Search from "./components/search";
// import Search2 from "./components/search2";
// import Search3 from "./components/search3";
import UserCard from "./components/UserCard";


class App extends React.Component {
    state = {
        user: null,
        error: null,
        loading: false
    }

    fetchUserData = async (username) => {
        this.setState({
            loading: true
        }, async () => {
            //Fetch Github API
            try {
                const res = await fetch('https://api.github.com/users/' + username)
                if (res.ok) {
                    const data = await res.json()
                    // console.log(data)
                    return this.setState({
                        user: data,
                        error: null,
                        loading: false
                    })
                }

                const error = (await res.json()).message

                this.setState({
                    error: error,
                    loading: false
                })
            } catch (e) {
                console.log(e)
                this.setState({
                    error: 'Some error',
                    loading: false
                })
            }
        })

    }

    render() {
        const {error, loading, user} = this.state
        return (
            <div>
                <Search fetchData={this.fetchUserData}/>
                {(loading && (<p>Loading...</p>))}
                {error && <p className="text-danger">{error}</p>}
                {!loading && !error && user && <UserCard user={this.state.user}/>}
            </div>
        );
    }
}

export default App;
