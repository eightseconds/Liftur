import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/home');
        }

        this.setState({ errors: nextProps.errors })
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
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history).then(() => {
            this.props.login(user)
        })
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
            <div className="session-form-container">
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <input className='session-form-input' type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                    />
                    <input className='session-form-input' type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                    />
                    <input className='session-form-input' type="password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        placeholder="Confirm Password"
                    />
                    <br />
                    <input className='submit-session-button' type="submit" value="Sign Up" />
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);