const Validator = require('validator');

module.exports = function validateWorkoutPlanInput(data) {
  let errors = {};
  // data.goal = Validator.isString(data.goal) ? data.goal : '';
  // data.difficulty = Validator.isInt(data.difficulty) ? data.difficulty : '';

  // if (!Validator.isString(data.goal)) {
  //   errors.weight = 'Specify your goal'
  // } 

  // if (!Validator.isInt(data.difficulty, { min: 1, max :3 })) {
  //   errors.difficulty = 'Specify Experience Level'
  // }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
