import { RECEIVE_WORKOUT_PLAN, REMOVE_WORKOUT_PLAN, RECEIVE_WORKOUT_PLANS } from '../actions/workoutPlan_actions';



export default function (state={}, action) {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WORKOUT_PLANS:
            return action.workoutPlans.data
        case RECEIVE_WORKOUT_PLAN:
            return Object.assign({}, state, {[action.workoutPlan.data._id]: action.workoutPlan.data});
        case REMOVE_WORKOUT_PLAN:
            return state;
        default: 
            return state;
    }
}