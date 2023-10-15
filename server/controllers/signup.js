
import {Register} from '../models/registeredUser.js'
import bcrypt from 'bcrypt';
import { verifyEmail } from "../utils/verifyEmail.js";
const SALT_ROUNDS = 10;


const registerUser = async(req,res)=>{
    const userBody = req.body;
    // console.log(userBody);
    if(!userBody.name || !userBody.email || !userBody.password || !userBody.phone || !userBody.gender || !userBody.knows || !userBody.city || !userBody.state){
        res.status(200).json({
            status:400,
            message:"All Fields Are Mandatory"
        });
        return;
    }
    const userExists = await verifyEmail(userBody.email, "register");

  if (userExists ==="E") {
    res.send({ status: 400, message: "Email already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(userBody.password, SALT_ROUNDS);
  const userObj = new Register({
    name: userBody.name,
    password: hashedPassword,
    email: userBody.email,
    phone: userBody.phone,
    gender: userBody.gender,
    knows: userBody.knows,
    city: userBody.city,
    state: userBody.state,
  });

  await userObj.save();

  res.status(201).json({
    status:201,
    message:"User has been created!"
});
}
export default registerUser;