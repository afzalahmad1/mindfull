import React from "react";
import "./styles.css";
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import PhoneIcon from '@mui/icons-material/Phone';


const Add = ({addUser  , setAddUser, handleUpdate , addUserMessage, handleAdd}) => {


  const handleUser = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
    // console.log(user);
  };


  return (
    <div className="add-container">
        <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">Add New User</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
          <Person2RoundedIcon color="action"/>
            <input
              type="text"
              placeholder="Name"
              onChange={handleUser}
              value={addUser.name}
              name="name"
              required
            />
          </div>
          <div className="input">
          <MarkEmailUnreadRoundedIcon color="action"/>
            <input
              type="email"
              placeholder="Email"
              value={addUser.email}
              onChange={handleUser}
              name="email"
              required
            />
          </div>
          <div className="input">
            <PhoneIcon color="action" />
            <input
              type="number"
              placeholder="Phone"
              value={addUser.phone}
              onChange={handleUser}
              name="phone"
              required
            />
          </div>
        </div>
        {addUserMessage && <p style={{color:addUserMessage === "User has been created!"?"green":"red"}}>{addUserMessage}</p>}
        <div className="submit-container">
          <div className="submit" onClick={handleAdd}>
            Add
          </div>
          <div className="submit"  onClick={handleUpdate}>
            Update
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Add;