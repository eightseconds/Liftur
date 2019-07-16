import axios from 'axios';

export const createWorkoutPlan = planData => {
    return axios.post('/api/workoutPlans/create', planData)
}