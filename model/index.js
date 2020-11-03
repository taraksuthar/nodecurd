const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongo", { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("taste of success");
    } else {
        console.log("error in connecting");
    }
});
const Project = require("./project.model");