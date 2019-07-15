import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginForm from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import './main.css'

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
                
                <h1 className='liftur-header'>Liftur</h1>
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
                <footer className='main-page-footer'>
                    Copyright &copy; 2019 Liftur Co.
                </footer>

            </div>
        );
    }
}

export default MainPage;