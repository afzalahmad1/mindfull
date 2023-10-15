// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const registerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  knows: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  
});

const Register = Mongoose.model("registeredUsers",registerSchema)
export  {Register};