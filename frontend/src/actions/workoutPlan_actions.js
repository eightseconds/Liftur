import * as APIUtil from '../util/workoutPlan_api_util';

export const RECEIVE_WORKOUT_PLAN = 'RECEIVE_WORKOUT_PLAN';
export const RECEIVE_WORKOUT_PLANS = 'RECEIVE_WORKOUT_PLANS';
export const REMOVE_WORKOUT_PLAN = 'REMOVE_WORKOUT_PLAN';

export const receiveWorkoutPlans = workoutPlans => ({
    type: RECEIVE_WORKOUT_PLANS,
    workoutPlans
})

export const receiveWorkoutPlan = workoutPlan => ({
    type: RECEIVE_WORKOUT_PLAN,
    workoutPlan
})

export const removeWorkoutPlan = (workoutPlan) => ({
    type: REMOVE_WORKOUT_PLAN,
    workoutPlan
})

export const createWorkoutPlan = planData => dispatch => {
    return APIUtil.createWorkoutPlan(planData).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
}

export const fetchWorkoutPlan = id => dispatch => {
    APIUtil.fetchWorkoutPlan(id).then(workoutPlan => dispatch(receiveWorkoutPlan(workoutPlan)))
}

export const fetchWorkoutPlans = id => dispatch => {
    APIUtil.fetchWorkoutPlans(id).then(workoutPlans=> dispatch(receiveWorkoutPlans(workoutPlans)))
}

export const deleteWorkoutPlan = id => dispatch => {
    return APIUtil.deleteWorkoutPlan(id).then(workoutPlan => dispatch(removeWorkoutPlan(workoutPlan)))
}