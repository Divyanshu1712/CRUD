//Require mongoose
const mongoose = require('mongoose');
// Schema
const schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String, required: true },
    gender: { type: String, required: true }
});
// Creating a model 
const User = mongoose.model("user", schema);
// export the User Module
module.exports = User;