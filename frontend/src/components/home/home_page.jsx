import React from 'react';
import logo from './logo.png'
import './home_page.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
                <div className="liftur--ui">
                    <div className="home-page--top">
                        <div className="home-page--header">
                            <img src={logo} alt="Logo" className="logo" />
                            <h1>Liftur</h1>
                        </div>
                        <button onClick={this.logoutUser}>Log Out</button>   
                    </div>
                    <div className="plan--wrapper">
                        <div className="plan--container">
                            Plan 1
                        </div>
                        <div className="plan--container">
                            Create New Plan
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomePage;