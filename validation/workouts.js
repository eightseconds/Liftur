const Validator = require('validator');

module.exports = function validateWorkoutInput(data) {
    let errors = {};

    // data.goal = Validator.isString(data.goal) ? data.goal : '';
    data.difficulty = Validator.isInt(data.difficulty) ? data.difficulty : '';
    // data.exercises = Validator.isArray(data.exercises) ? data.exercises : '';
    // data.weights = Validator.isArray(data.weights) ? data.weights : '';
    
    

    // if (!Validator.isString(data.goal)) {
    //     errors.weight = 'Specify your goal'
    // }

    if (!Validator.isInt(data.difficulty, { min: 1, max: 3 })) {
        errors.difficulty = 'Specify Experience Level'
    }

    // if (!Validator.isArray(data.exercises)) {
    //     errors.exercises = 'Workout requires exercises'
    // }

    // if (!Validator.isArray(data.weights)) {
    //     errors.weights = 'Workout requires weights'
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}