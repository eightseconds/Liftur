import {RECEIVE_WORKOUT_PLAN} from '../actions/workoutPlan_actions';
 
export default function (state={}, action) {
    switch(action.type) {
        case RECEIVE_WORKOUT_PLAN:
            return action.workoutPlan;
        default: 
            return state;
    }
}