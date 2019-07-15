const Validator = require('validator');

module.exports = function validateWorkoutPlanInput(data) {
  let errors = {};
  data.goal = Validator.isString(data.goal) ? data.goal : '';
  data.difficulties = Validator.isInt(data.difficulties) ? data.difficulties : '';

  if (!Validator.isString(data.goal)) {
    errors.weight = 'Specify your goal'
  } 

  if (!Validator.isInt(data.difficulty, { min: 1, max :3 })) {
    errors.difficulties = 'Specify Experience Level'
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
