import {Register} from "../models/registeredUser.js";
import {User} from "../models/User.js";

const verifyEmail = async (email , model) => {
  try {
    let userData;
    if(model === "register"){
      userData = await Register.findOne({email});
    }else if ( model === "user"){
      userData = await User.findOne({email});
    }

    if (userData && userData.email === email) {
      return "E";
    }
    return null;
  } catch (err) {
    return "Err";
  }
};

export { verifyEmail };