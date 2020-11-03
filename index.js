const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const CurdController = require("./controllers/curd")
application.use(bodyparser.urlencoded({
    extended: true
}));
application.set('views', path.join(__dirname, "/views/"));
application.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));
application.set("view engine", "hbs")
application.get("/", (req, res) => {
    // res.send("<h2>hello world</h2>")
    res.render("login", {})
})
application.use("/curd", CurdController)
application.listen("3000", () => {
    console.log("server started at 3000")
});