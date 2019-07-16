import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginForm from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import './main.css'
import logo from './logo.png'
import mainmodel from './mainmodel.jpg'

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            loginModalIsOpen: false,
            signupModalIsOpen: false,
        };

        this.openSignupModal = this.openSignupModal.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
    }

    openLoginModal() {
        this.setState({ loginModalIsOpen: true,
                        signupModalIsOpen: false });
    }
    openSignupModal() {
        this.setState({ signupModalIsOpen: true,
                        loginModalIsOpen: false });
    }

    closeLoginModal() {
        this.setState({ loginModalIsOpen: false });
    }
    closeSignupModal() {
        this.setState({ signupModalIsOpen: false });
    }

    render() {
        return (
            <div className='liftur-main-div'>
                <div className="splash-page--top">
                    <div className="splash-page--header">
                        <div className="splash--header--logo">
                            <img src={logo} alt="Logo" className="logo" />
                            <h1>Liftur</h1>
                        </div>
                    </div>
                </div>
                <div className='session-div'>
                    <div className='login-signup-buttons-div'>
                        <button className='session-button' onClick={this.openLoginModal}>Log In</button>
                        <button className='session-button' onClick={this.openSignupModal}>Sign Up</button>
                    </div>
                    <div className='modal-div'>
                        <Modal className='login-modal'
                        isOpen={this.state.loginModalIsOpen}
                        >
                            <button className='x-button' onClick={this.closeLoginModal}>X</button>
                            <LoginForm/>
                            <button className='switch-button' onClick={this.openSignupModal}>Don't have an account? Sign Up</button>
                        </Modal>
                        <Modal className='signup-modal'
                        isOpen={this.state.signupModalIsOpen}
                        >
                            <button className='x-button' onClick={this.closeSignupModal}>X</button>
                            <SignupForm/>
                            <button className='switch-button' onClick={this.openLoginModal}>Already have an account? Log In</button>
                        </Modal>
                    </div>
                </div>
                <div className='main-info-div'>
                    <b className='main-info'>Get a workout plan tailored to your own needs for free. Just sign up now!</b>
                </div>
                <div className='main--footer'>
                    <img src={mainmodel} alt="main-model" className="model"/>
                </div>
            </div>
        );
    }
}

export default MainPage;