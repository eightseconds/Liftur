
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutPlanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  goal: {
    type: String,
    required: true
  },

  difficulty: {
    type: String,
    required: true
  },

  workouts: {
    type: Array,
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

const WorkoutPlan = mongoose.model('workoutPlan', WorkoutPlanSchema);

module.exports = WorkoutPlan;
