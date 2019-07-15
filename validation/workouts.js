import validator from 'validator';


module.exports = function validateWorkoutInput(data) {
  let errors = {};

  data.height = validator.isInt(data.height) ? data.heght : '';
  data.weight = validator.isInt(data.weight) ? data.weight : '';
  data.bodytype = validator.isBoolean(data.bodytype) ? data.bodytype : '';
  data.goal = validator.isBoolean(data.goal) ? data.goal : '';


  if (!validator.isInt(data.height)) {
    errors.height = 'Height must be numbers!'
  } 

  if (!validator.isInt(data.weight)) {
    errors.height = 'Height must be numbers!'
  } 

  if (!validator.isBoolean(data.bodytype)) {
    errors.height = 'Height must be numbers!'
  } 

  if (!validator.isBoolean(data.goal)) {
    errors.height = 'Height must be numbers!'
  } 

  if (!validator.isEmprty(data.height)) {
    errors.height = "Text is required!"
  }

  if (!validator.isEmprty(data.weight)) {
    errors.height = "Text is required!"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
