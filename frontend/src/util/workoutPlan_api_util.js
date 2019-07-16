import axios from 'axios';

export const createWorkoutPlan = workoutPlan => {
    return axios.post('/api/workoutPlans/create', workoutPlan)
}