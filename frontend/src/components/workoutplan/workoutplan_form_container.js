import { connect } from 'react-redux';
import { createWorkoutPlan, fetchWorkoutPlans } from '../../actions/workoutPlan_actions';
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
        fetchWorkoutPlans: id => dispatch(fetchWorkoutPlans(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(workoutPlanForm);