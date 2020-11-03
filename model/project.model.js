const mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: "Required"
    },
    productName: {
        type: String,
        required: "Required"
    },
    productName: {
        type: String,
        required: "Required"
    },
    projectPrice: {
        type: String,

    },
    projectCategory: {
        type: String,

    },
    projectQty: {
        type: String,

    }
});
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model("User", UserSchema);

mongoose.model("Product", ProductSchema)