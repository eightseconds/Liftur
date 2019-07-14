import React from 'react';

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
            <div>
                <button onClick={this.logoutUser}>Log Out</button>
            </div>
        );
    }
}

export default HomePage;