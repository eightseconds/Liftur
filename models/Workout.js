
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    min: 1,
    max: 500,
    required: true
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
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoogse.model('workout', WorkoutSchema);

module.exports = Workout;
