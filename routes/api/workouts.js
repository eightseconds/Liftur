const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateWorkoutInput = require('../../validation/workouts');
const Workout = require('../../models/Workout');


router.get("/test", (req, res) => res.json({ msg: "this is workout routes" }));
router.post('/createWorkout', (req, res) => {
    const { errors, isValid } = validateWorkoutInput(req.body);
    if(!isValid) {
        eroors.name = 'didnt work'
        return res.status(400).json(errors)
    }
    const newWorkout = new Workout({
        goal: req.body.goal,
        difficulty: req.body.difficulty,
        exercises: req.body.exercises,
        weights: reqcr.body.weights
    });

    newWorkout.save()
        .then( workout => {
            console.log(workout)
        })
        .catch(err => console.log(err));

}) 

module.exports = router