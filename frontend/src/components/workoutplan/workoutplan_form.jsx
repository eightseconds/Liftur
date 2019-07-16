import React from 'react';

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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Goal
                        <select value={this.state.goal} onChange={this.update("goal")}>
                            <option value="aesthetic">Aesthetic</option>
                            <option value="muscle growth">Muscle Growth</option>
                            <option value="weight loss">Weight Loss</option>
                        </select>
                    </label>
                    <label>Difficulty
                        <select value={this.state.difficulty} onChange={this.update("difficulty")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <input type="submit" value="Create Plan"/>
                </form>
            </div>
        )
    }
}

export default workoutPlanForm