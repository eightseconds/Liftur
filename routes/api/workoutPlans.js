const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateWorkoutPlanInput = require('../../validation/workoutPlans');
const WorkoutPlan = require('../../models/WorkoutPlan');

router.get("/test", (req, res) => res.json({ msg: "this is workout routes"}));

router.post("/create", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateWorkoutPlanInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const newWorkoutPlan = new WorkoutPlan({
      user: req.user.id,
      goal: req.goal,
      difficulty: req.difficulty
    })

    newWorkoutPlan.save()
  }
)

module.exports = router;