import * as APIUtil from '../util/workoutPlan_api_util';

export const RECEIVE_WORKOUT_PLAN = 'RECEIVE_WORKOUT_PLAN';
export const REMOVE_WORKOUT_PLAN = 'RECEIVE_WORKOUT_PLAN';

export const receiveWorkoutPlan = workoutPlan => ({
    type: RECEIVE_WORKOUT_PLAN,
    workoutPlan
})

export const removeWorkoutPlan = (id) => ({
    type: REMOVE_WORKOUT_PLAN
})

export const createWorkoutPlan = planData => dispatch => {
    APIUtil.createWorkoutPlan(planData).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
}

// export const fetchWorkoutPlan = id => dispatch => {
//     APIUtil.fetchWorkoutPlan(id).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
// }

// export const fetchWorkoutPlans = id => dispatch => {
//     APIUtil.fetchWorkoutPlans(id).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
// }

// export const deleteWorkoutPlan = id => dispatch => {
//     APIUtil.deleteWorkoutPlan(id).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
// }