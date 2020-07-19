const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//adding name and type of workout, if workout is "cardio" related then focus on time spent working out.
const workoutnSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
