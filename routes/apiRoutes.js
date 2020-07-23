const router = require("express").Router();
const Workout = require("../models/workout.js");




router.post("/api/workouts", function (req, res) {
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout).catch(err => res.json(err))
    })
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } }
    ).then(dbWorkout => { res.json(dbWorkout) }).catch(
        err => res.json(err)
    )
});

router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkout => { res.json(dbWorkout) }).catch(
        err => res.json(err))
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(dbWorkout => { res.json(dbWorkout) }).catch(
        err => res.json(err))
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findOneAndDelete(body.id)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
module.exports = router;