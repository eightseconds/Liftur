import { combineReducers } from 'redux';
import workoutPlans_reducer from './workoutPlans_reducer';


const EntitiesReducer = combineReducers({
    workoutPlans: workoutPlans_reducer
});

export default EntitiesReducer;