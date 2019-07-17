import { connect } from 'react-redux';
import { fetchWorkoutPlans } from '../../actions/workoutPlan_actions';

import HomePage from './home_page';

const mapStateToProps = state => {
    let workoutPlans = state.entities.workoutPlans
    let currentUser = state.session.user
    return {
        loggedIn: state.session.isAuthenticated,
        workoutPlans,
        currentUser
    }
};

const mapDispatchToProps = dispatch => ({
    fetchWorkoutPlans: (id) => dispatch(fetchWorkoutPlans(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
