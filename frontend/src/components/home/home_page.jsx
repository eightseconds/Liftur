import React from 'react';
import plus from './plus.png'
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WorkoutPlan from './workout_plan';
import './home_page.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchWorkoutPlans(this.props.currentUser.id);
    }

    render() {
        let workoutPlan = Object.values(this.props.workoutPlans).map(workoutPlan => {
            return (
                <WorkoutPlan 
                workoutPlan = {workoutPlan}
                key = {workoutPlan._id}
                />
            )
        })
        return (
                <div className="liftur--ui">
                    <Navbar />
                    <div className="plan--wrapper">
                        <div className="plan--header">
                            My Workout Plans
                        </div>
                        <div className="plan--scrollable">
                            { workoutPlan }
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