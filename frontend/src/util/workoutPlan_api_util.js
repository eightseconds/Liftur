import axios from 'axios';

export const createWorkoutPlan = planData => {
    return axios.post('/api/workoutPlans/create', planData)

export const fetchWorkoutPlan = (workoutPlanId) => {
    return axios.get(`/api/workoutPlans/${workoutPlanId}`)
}

export const fetchWorkoutPlans = (userId) => {
    return axios.get(`/api/workoutPlans/${userId}`)
}

export const deleteWorkoutPlan = (workoutPlanId) => {
    return axios.delete(`/api/workouts/removeWorkoutPlan/${workoutPlanId}`)
}