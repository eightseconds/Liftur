
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  height: {
    type: Number
  },
  
  weight: {
    type: Number,
    min: 1,
    max: 500,
    
  },
  bodytype: {
    type: Boolean,
    required: true
  },
  goal: {
    type: Boolean,
    required: true
  },
  difficulties: {
    type: String,
    min: 1,
    max: 5,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;
