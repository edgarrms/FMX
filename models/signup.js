const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    // date: { type: Date, default: Date.now }
});

const Signup = mongoose.model("Signup", signUpSchema);

module.exports = Signup;




