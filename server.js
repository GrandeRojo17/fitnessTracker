//still working on functionality 
//have to look towards last few assignmenets and look at the 
// documents I drew up
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const routes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3033;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const mongodb_uri = process.env.MONGODB_URI || "mongodb://loclalhost/workouts";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false


});
app.use(routes);
app.use(htmlRoutes);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});