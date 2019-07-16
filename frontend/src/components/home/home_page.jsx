import React from 'react';
import logo from './logo.png'
import plus from './plus.png'
import menu from './menu.png'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './home_page.css'

class HomePage extends React.Component {
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
                <div className="liftur--ui">
                    <button onClick={this.openModal}>  
                        <img src={menu} alt="Menu" className="menu"/>
                    </button>
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
                                    <div className="home-page--modal--container">
                                        <div className="home-page--modal--items">
                                            Plan 1
                                        </div>
                                        <div className="home-page--modal--items">
                                            Plan 2
                                        </div>
                                        <div className="home-page--modal--items">
                                            Plan 3
                                        </div>
                                    </div>
                                    <div className="home-page--modal--logout">
                                        <button onClick={this.logoutUser}>Log Out</button>   
                                    </div>
                                </Modal>
                            </div>
                            <div className="header--logo">
                                <img src={logo} alt="Logo" className="logo" />
                                <h1>Liftur</h1>
                            </div>
                        </div>
                    </div>
                    <div className="plan--wrapper">
                        <div className="plan--header">
                            Plan 1
                        </div>
                        <div className="plan--scrollable">
                        </div>
                        <div className="plan--footer">
                            <Link to={"/create"}>
                                <img src={plus} alt="Plus" className="plus" />
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomePage;