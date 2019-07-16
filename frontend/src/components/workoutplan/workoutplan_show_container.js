import { connect } from 'react-redux';
import { createWorkoutPlan } from '../../actions/workoutPlan_actions';
import workoutPlanForm from './workoutplan_form';

const mapStateToProps = state => {
    let currentUser = state.session.user
    return {
        currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWorkoutPlan: workoutPlan => dispatch(createWorkoutPlan(workoutPlan)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(workoutPlanForm);