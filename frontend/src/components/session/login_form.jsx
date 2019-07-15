import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_form.css'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/home');
        }
        this.setState({ errors: nextProps.errors })
    }

    demoLogin(e) {
        e.preventDefault();

        const demoUser = {
            email: 'demo@liftur.com',
            password: 'demouser'
        };

        this.setState({ email: demoUser.email })
        this.setState({ password: demoUser.password })
        this.props.login(demoUser)
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul className="error-container">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="error-list">
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='session-form-div'>
                <form className='session-form' onSubmit={this.handleSubmit}>  
                    <h2>Log In</h2>              
                    <input className='session-form-input' type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder=" Email"
                    />
                    <input className='session-form-input' type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder=" Password"
                    />
                    <br/>
                    <div className='login-buttons-div'>
                        <input className='submit-session-button' type="submit" value="Log In" />

                        <button className='submit-session-button' onClick={this.demoLogin} >
                            <span className='demo-button-text'>Demo Login</span>
                        </button>
                    </div>
                    
                    {this.renderErrors()}         
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);