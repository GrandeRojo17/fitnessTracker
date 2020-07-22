const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//adding name and type of workout, if workout is "cardio" related then focus on time spent working out.
const WorkoutSchema = new Schema({
  //"Enter a name for workout"
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "enter an exercise type"
      },
      name: {
        type: String, trim: true, unique: true, required: "Must provide a name"
      },
      duration: {
        type: Number,
        required: "Duration is required"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
