//still working on functionality 
//have to look towards last few assignmenets and look at the 
// documents I drew up
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const routes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const mongodb_uri = process.env.mongodbUri || "mongodb://loclalhost/workouts";
mondgoose.connect(mongodb_uri,{
    useNewUrlParser:true,
    useFindAndMod:false;
    app.use(routes);
    app.use(htmlRoutes);


});
app.listen(PORT,() => {

    console.log(`App running on port ${PORT}`; 
});