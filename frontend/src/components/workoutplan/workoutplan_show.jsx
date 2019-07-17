import React from 'react';
import Navbar from '../nav/navbar_container';
import Modal from 'react-modal';
import WorkoutShow from '../workout/workout_show';
import './workoutplan_show.css';
import { withRouter } from 'react-router-dom';

class WorkoutPlanShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day1ModalIsOpen: false,
            day2ModalIsOpen: false,
            day3ModalIsOpen: false,
            day4ModalIsOpen: false,
            day5ModalIsOpen: false,
        }

        this.openDay1Modal = this.openDay1Modal.bind(this);
        this.openDay2Modal = this.openDay2Modal.bind(this);
        this.openDay3Modal = this.openDay3Modal.bind(this);
        this.openDay4Modal = this.openDay4Modal.bind(this);
        this.openDay5Modal = this.openDay5Modal.bind(this);
        this.closeDay1Modal = this.closeDay1Modal.bind(this);
        this.closeDay2Modal = this.closeDay2Modal.bind(this);
        this.closeDay3Modal = this.closeDay3Modal.bind(this);
        this.closeDay4Modal = this.closeDay4Modal.bind(this);
        this.closeDay5Modal = this.closeDay5Modal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkoutPlan(this.props.workoutPlanId);
    }

    openDay1Modal() {
        this.setState({
            day1ModalIsOpen: true,
        });
    }
    openDay2Modal() {
        this.setState({
            day2ModalIsOpen: true,
        });
    }
    openDay3Modal() {
        this.setState({
            day3ModalIsOpen: true,
        });
    }
    openDay4Modal() {
        this.setState({
            day4ModalIsOpen: true,
        });
    }
    openDay5Modal() {
        this.setState({
            day5ModalIsOpen: true,
        });
    }

    closeDay1Modal() {
        this.setState({ day1ModalIsOpen: false });
    }
    closeDay2Modal() {
        this.setState({ day2ModalIsOpen: false });
    }
    closeDay3Modal() {
        this.setState({ day3ModalIsOpen: false });
    }
    closeDay4Modal() {
        this.setState({ day4ModalIsOpen: false });
    }
    closeDay5Modal() {
        this.setState({ day5ModalIsOpen: false });
    }

    handleDelete() {
        debugger
        this.props.deleteWorkoutPlan(this.props.workoutPlanId)
        .then((res) => console.log(res))
        // => this.props.history.push(`/home`
    }

    render() {
        if(!this.props.workoutPlan) return null;

        return (
            <div className='workoutPlan-show-page'>
                <Navbar/>
                <div>
                    <div className='buttons-div'>
                        <div className='workout-modal-button' onClick={this.openDay1Modal}>
                            Day 1
                        </div>
                        <div className='workout-modal-button' onClick={this.openDay2Modal}>
                            Day 2
                        </div>
                        <div className='workout-modal-button' onClick={this.openDay3Modal}>
                            Day 3
                        </div>
                        <div className='workout-modal-button' onClick={this.openDay4Modal}>
                            Day 4
                        </div>
                        <div className='workout-modal-button' onClick={this.openDay5Modal}>
                            Day 5
                        </div>
                    </div>
                    <div className='rest-instr'>
                        Feel free to use your rest days whenever during the week... Just make sure you finish your workouts!
                    </div>
                    {/* <div onClick={this.handleDelete}>
                        <div>
                            Delete Work Out
                        </div>
                    </div> */}
                    <Modal 
                    isOpen={this.state.day1ModalIsOpen}
                    >
                        <button onClick={this.closeDay1Modal}>X</button>
                        <WorkoutShow workout={this.props.workoutPlan.workouts[0]}/>
                    </Modal>

                    <Modal
                    isOpen={this.state.day2ModalIsOpen}>
                        <button onClick={this.closeDay2Modal}>X</button>
                        <WorkoutShow workout={this.props.workoutPlan.workouts[1]}/>
                    </Modal>

                    <Modal
                    isOpen={this.state.day3ModalIsOpen}>
                        <button onClick={this.closeDay3Modal}>X</button>
                        <WorkoutShow workout={this.props.workoutPlan.workouts[2]}/>
                    </Modal>

                    <Modal
                    isOpen={this.state.day4ModalIsOpen}>
                        <button onClick={this.closeDay4Modal}>X</button>
                        <WorkoutShow workout={this.props.workoutPlan.workouts[3]}/>
                    </Modal>

                    <Modal
                    isOpen={this.state.day5ModalIsOpen}>
                        <button onClick={this.closeDay5Modal}>X</button>
                        <WorkoutShow workout={this.props.workoutPlan.workouts[4]}/>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default withRouter(WorkoutPlanShow);