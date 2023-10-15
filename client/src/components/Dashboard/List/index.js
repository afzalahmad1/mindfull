import React from "react";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { red } from "@mui/material/colors";

function List({ user,setId , setFlag,setAddUser ,deleteUser}) {
  // console.log("coin",coin);

  const handleEdit = (e,user)=>{
    e.preventDefault();
    // console.log(user);
    setAddUser(user)
    setId(user._id)
    setFlag(true)
  }

  return (
    <Link to={`/user/${user._id}`}>
      <div className="list-row">
        <Tooltip title="Name" placement="bottom-start">
          <p>{user.name}</p>
        </Tooltip>
        <Tooltip title="Email" placement="bottom-start">
          <p>{user.email}</p>
        </Tooltip>
        <Tooltip title="Coin Logo" placement="bottom-start">
          <p>{user.phone}</p>
        </Tooltip>
        <div className="edit-delete-logo">
        <DeleteRoundedIcon onClick={(e)=>deleteUser(e,user._id)} sx={{ color: red[900] }}/>
            <ModeEditOutlineRoundedIcon color="primary" onClick={(e)=>handleEdit(e,user)}/>
        </div>
        
      </div>
    </Link>
  );
}

export default List;
