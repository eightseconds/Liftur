import React from 'react';
import './navbar.css';
import logo from './logo.png'
import menu from './menu.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            modalIsOpen: false
        };

        this.logoutUser = this.logoutUser.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        return (
            <div className="navbar--ui">
                <div onClick={this.openModal}>
                    <img src={menu} alt="Menu" className="menu" />
                </div>
                <div className="home-page--top">
                    <div className="home-page--header">
                        <div>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                className="home-page--modal"
                            >
                                <div className="home-page--modal--closer">
                                    <button onClick={this.closeModal} className='modal-close'>x</button>
                                </div>
                                <div>
                                    <Link to="/home" className="nav-homelink"><div className="home-page--modal--link">Home</div></Link>
                                </div>
                                {/* <div className="home-page--modal--container"> */}
                                    {/* <div className="home-page--modal--items">
                                        Plan 1
                                        </div>
                                    <div className="home-page--modal--items">
                                        Plan 2
                                        </div>
                                    </div> */}
                                <div className="home-page--modal--logout" onClick={this.logoutUser}>
                                    <div>Log Out</div>
                                </div>
                            </Modal>
                        </div>
                        <div className="header--logo">
                            <img src={logo} alt="Logo" className="logo" />
                            <h1>Liftur</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;