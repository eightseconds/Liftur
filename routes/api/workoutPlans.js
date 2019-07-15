const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateWorkoutPlanInput = require('../../validation/workoutPlans');
const WorkoutPlan = require('../../models/WorkoutPlan');

router.get("/test", (req, res) => res.json({ msg: "this is workout routes"}));

router.post("/calibrate", 
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
// this need to be finisehd have to work on promise!
    newWorkoutPlan.save()
      // .then(plan => res.json(plan))
  }
)

module.exports = router;