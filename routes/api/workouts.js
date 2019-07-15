const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateWorkoutInput = require('../../validation/workouts');
const Workout = require('../../models/Workout');

router.get("/test", (req, res) => res.json({ msg: "this is workout routes"}));

router.post("/calibrate", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateWorkoutInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    const newWorkout = new Workout({
      user: req.user.id,
      height: req.height,
      weight: req.weight,
      bodytype: req.bodytype,
      difficulties: req.difficulties
    })
// this need to be finisehd have to work on promise!
    newWorkout
      .save()
      // .then(plan => res.json(plan))
  }
)

module.exports = router;