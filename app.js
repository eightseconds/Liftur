const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const workouts = require("./routes/api/workouts")
const workoutPlans = require("./routes/api/workoutPlans")
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { userNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/workouts", workouts)
app.use("/api/workoutPlans", workoutPlans)
app.use(passport.initialize());
require('./config/passport')(passport)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));