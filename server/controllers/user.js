import { verifyEmail } from "../utils/verifyEmail.js";
import {User} from '../models/User.js'
const addUser = async(req,res)=>{
    const userBody = req.body;
    if(!userBody.name || !userBody.email || !userBody.phone){
        res.status(200).send({
            message: "All Fields Are Required"
        })
        return;
    }
    const userExists = await verifyEmail(userBody.email,'user');
    if (userExists ==="E") {
        res.send({ status: 400, message: "Email already exists" });
        return;
      }
      const userObj = new User({
        name: userBody.name,
        email: userBody.email,
        phone: userBody.phone,
      });

      await userObj.save();

      res.status(201).json({
        status:201,
        message:"User has been created!"
    });

}

const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find({})
        res.status(200).send({
            allUsers
        })
    } catch (error) {
        res.status(400).send({error})
    }
}

const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.findByIdAndDelete(userId);
      res.status(200).send({message:"User is deleted successfully"});
    } catch (e) {
      res.status(500).send({message:"Internal server error"});
    }
  };

  const updateUser =  async (req, res) => {
    try {
      const userBody = req.body;
      console.log(userBody);
    //   const user =await User.findById(userBody.id)
    //   console.log("user",user);
      await User.findByIdAndUpdate(userBody.id, {
        name: userBody.name,
        email: userBody.email,
        phone: userBody.phone
      });
  
      res.status(200).send({message:"User succesfully updated!"});
    } catch (e) {
      res.status(500).send({message:"Internal server error"});
    }
  };

export  {addUser , getAllUsers , deleteUser, updateUser};