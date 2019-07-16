import * as APIUtil from '../util/workoutPlan_api_util';

export const RECEIVE_WORKOUT_PLAN = 'RECEIVE_WORKOUT_PLAN';

export const receiveWorkoutPlan = workoutPlan => ({
    type: RECEIVE_WORKOUT_PLAN,
    workoutPlan
})
