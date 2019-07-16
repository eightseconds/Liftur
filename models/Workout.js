const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    goal: {
        type: String,
        // required: true
    },

    difficulty: {
        type: String,
        // required: true
    },

    exercises: {
        type: Array,
        required: true
    },

    weights: {
        type: Array,
        required: true
    },

    sets: {
        type: Array,
    },

    reps: {
        type: Array
    }
});

const Workout = mongoose.model('workout', WorkoutSchema);
module.exports = Workout;