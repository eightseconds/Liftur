import React from 'react';
import { Link } from 'react-router-dom';
import './workout_plan.css'


class WorkoutPlan extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="workout-links-container">
                <div className="plan--container">
                    <Link to={`/workoutPlan/${this.props.workoutPlan._id}`} className="workout-link">
                        <div>{this.props.workoutPlan.goal} plan</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default WorkoutPlan