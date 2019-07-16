const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateWorkoutPlanInput = require('../../validation/workoutPlans');
const WorkoutPlan = require('../../models/WorkoutPlan');
const Workout = require('../../models/Workout');

router.get("/test", (req, res) => res.json({ msg: "this is workout routes"}));

router.post("/create", 
 
  (req, res) => {
    const { isValid, errors } = validateWorkoutPlanInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const newWorkoutPlan = new WorkoutPlan({
      user: req.body.user.id,
      goal: req.body.goal,
      difficulty: req.body.difficulty,
      workouts: ['hello']
    });

    workouts = Workout.find({difficulty: req.body.difficulty, goal: req.body.goal})
      .then(workouts => newWorkoutPlan.workouts = (workouts)).then(() => {
        newWorkoutPlan.save().then(workoutPlan => {
          console.log(workoutPlan)
        })
          .catch(err => console.log(err));
      });
    
  }
)

router.get('/:workoutPlan_id', (req,res)=>{
  workout = Workout.find({id: req.params.workoutPlan_id})
    .then(workout => workout)
})

router.get('/:user_id', (req, res) => {
  workoutPlans = WorkoutPlan.find({user: req.params.user_id})
    .then(workoutPlans => workoutPlans);
})

router.delete('/removeWorkoutPlan/:workoutPlan_id', (req, res) => {
  WorkoutPlan.Remove({id: req.params.workoutPlan_id})
})

module.exports = router;