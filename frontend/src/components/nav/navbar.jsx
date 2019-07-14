import React from 'react';

class NavBar extends React.Component {
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
                {/* <button onClick={this.logoutUser}>Log Out</button> */}
            </div>
        );
    }
}

export default NavBar;