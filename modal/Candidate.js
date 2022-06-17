const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
 },
 dateOfBirth: {
    type: String,
    default: Date.now,
    required: true
 },
 age: {
    type: Number,
    required: true
 },
 address: {
    type: String,
    required: true
 },
 pin: {
    type: Number,
    required: true
 },
 state:{
    type: String,
    required: true
 },
 shortListStatus:{
    type: String
 },
 email:{
   type: String
}
});

module.exports = mongoose.model("profile", ProfileSchema);
