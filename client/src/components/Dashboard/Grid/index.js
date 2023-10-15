import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { red } from "@mui/material/colors";



function Grid({ user,deleteUser, setId , setFlag,setAddUser }) {

  const handleEdit = (e,user)=>{
    e.preventDefault();
    // console.log(user);
    setAddUser(user)
    setId(user._id)
    setFlag(true)
  }

  return (
    <Link to={`/user/${user._id}`}>
      <div className="grid-container">
        <p className="grid-content"><strong>Name:</strong> {user.name}</p>
        <p className="grid-content"><strong>Email:</strong>{user.email}</p>
        <p className="grid-content"><strong>Phone:</strong> {user.phone}</p>
        <div className="edit-delete-logo">
            <DeleteRoundedIcon onClick={(e)=>deleteUser(e,user._id)} sx={{ color: red[900] }}/>
            <ModeEditOutlineRoundedIcon color="primary" onClick={(e)=>handleEdit(e,user)}/>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
