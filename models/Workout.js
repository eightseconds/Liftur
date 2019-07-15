const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    goal: {
        type: String,
        required: true
    },

    difficulty: {
        type: Number,
        required: true
    },

    exercises: {
        type: Array,
        required: true
    },

    weights: {
        type: Array,
        required: true
    }
});

const Workout = mongoose.model('workout', WorkoutSchema);
module.exports = Workout;