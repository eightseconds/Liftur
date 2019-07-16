import React from 'react';
import './workoutplan_form.css'
import Navbar from '../nav/navbar_container';
import formmodel from './formmodel.jpg'

class workoutPlanForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.currentUser.id,
            goal: "",
            difficulty: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkoutPlan(this.state)
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="form--container">
                    <form onSubmit={this.handleSubmit} className="workspace--form">
                        <p>Set a Goal</p>
                        <div className="input-wrap select-box">
                            <select value={this.state.goal} onChange={this.update("goal")} className="form--select">
                                <option value="" disabled>Choose</option>
                                <option value="aesthetic">Aesthetic</option>
                                <option value="calisthenic">Calisthenic</option>
                                <option value="weight loss">Weight Loss</option>
                            </select>
                        </div>
                        <p>Set Difficulty Level</p>
                        <div className="input-wrap select-box">
                            <select value={this.state.difficulty} onChange={this.update("difficulty")} className="form--select">
                                <option value="" disabled>Choose</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <input type="submit" value="Create Plan" className="form--button"/>
                    </form>
                </div>
                <div className="form--footer">
                    <img src={formmodel} alt="form-model" className="form--model"/>
                </div>
            </div>
        )
    }
}

export default workoutPlanForm