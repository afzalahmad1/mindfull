// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
  },
});

const User = Mongoose.model("users",userSchema)
export  {User};