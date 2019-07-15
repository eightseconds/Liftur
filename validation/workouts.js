const Validator = require('validator');

module.exports = function validateWorkoutInput(data) {
  let errors = {};

  data.height = Validator.isNumeric(data.height) ? data.height : '';
  data.weight = Validator.isInt(data.weight) ? data.weight : '';
  data.bodytype = Validator.isBoolean(data.bodytype) ? data.bodytype : '';
  data.goal = Validator.isBoolean(data.goal) ? data.goal : '';
  data.difficulties = Validator.isInt(data.difficulties) ? data.difficulties : '';


  if (!Validator.isNumeric(data.height)) {
    errors.height = 'Height must be numbers!'
  } 

  if (!Validator.isInt(data.weight)) {
    errors.weight = 'Weight must be numbers!'
  } 

  if (!Validator.isInt(data.difficulties, { min: 1, max :5 })) {
    errors.difficulties = 'Specify Level of difficulties!'
  }

  if (!Validator.isBoolean(data.bodytype)) {
    errors.bodytype = 'Choose Body Type!'
  } 

  if (!Validator.isBoolean(data.goal)) {
    errors.goal = 'Choose your plan!'
  } 

  if (Validator.isEmprty(data.height)) {
    errors.height = "Text is required!"
  }

  if (Validator.isEmprty(data.weight)) {
    errors.weight = "Text is required!"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
