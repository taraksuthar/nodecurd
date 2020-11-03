const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ProductModel = mongoose.model("User")
router.get("/list", (req, res) => {
    /* var user = new ProductModel();
     user.username = "abc";
     user.password = "abc";
     user.email = "abc@.com";
     user.save();*/
    ProductModel.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.send("project controller")
        }
    })

});
router.get("/add", (req, res) => {
    res.render("login")
});
router.post("/add", (req, res) => {
    var user = new ProductModel();
    user.username = req.body.un;
    user.password = req.body.email;
    user.email = req.body.pwd;
    user.save();
});


module.exports = router;
