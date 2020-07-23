//still working on functionality 
//have to look towards last few assignmenets and look at the 
// documents I drew up
const express = require("express");
const app = express();
const logger = require("morgan");
//help connect to mongo database
const mongoose = require("mongoose");
//here are the routes to require and then to use
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//have envirorment variables inside of .env??

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
//sending and recieving json
app.use(express.json());
app.use(express.static('public'));
// const db = require("./models");

//This is where the database will be stored
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouts";



app.use(logger("dev"));

//
mongoose.connect(MONGODB_URI, {
    //these flags are necessary to always keep mongoose updated
    useNewUrlParser: true,
    useFindAndModify: false


});

app.use(apiRoutes);
app.use(htmlRoutes);
app.listen(PORT, () => {
    console.log(`                                   
    App running on port ${PORT}`)
});