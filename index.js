const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/expt", 
(error) => {
 if (!error) {
 console.log("Successfully Connected to Database");
 } else {
 console.log("Error Connecting to database");
 }
});