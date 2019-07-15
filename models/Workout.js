
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
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout =mongoogse.model('workout', WorkoutSchema);

module.exports = Workout;
