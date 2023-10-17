import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import WcRoundedIcon from '@mui/icons-material/WcRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    city: "",
    knows: "",
    state: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const registerUser = async () => {
    try {
      const data = await axios.post(
        `https://mindfull-klo6.onrender.com/user/register`,
        user
        );
      console.log(data);
      setMessage(data.data.message);
      // if(data.data.message === "User has been created!"){
      //   navigate("/login")
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <div className="container">
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <Person2RoundedIcon color="action"/>
            <input
              type="text"
              placeholder="Name"
              onChange={handleUser}
              value={user.name}
              name="name"
              required
            />
          </div>
          <div className="input">
          <MarkEmailUnreadRoundedIcon color="action"/>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
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
              value={user.phone}
              onChange={handleUser}
              name="phone"
              required
            />
          </div>
          <div className="input">
            <LockOpenRoundedIcon color="action" />
            <input
              type="text"
              placeholder="Password"
              value={user.password}
              onChange={handleUser}
              name="password"
              required
            />
          </div>
          <div className="gender">
            <WcRoundedIcon color="action"/>
            <label >Gender: </label>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              onChange={handleUser}
              name="gender"
              value="male"
              id="male"
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              onChange={handleUser}
              name="gender"
              value="female"
              id="female"
            />
          </div>
          <div className="input">
            <label htmlFor="know">How did you hear about this?</label>    
            <select name="knows" id="know" className="dropdown" value={user.knows} onChange={handleUser}>
                <option value="">--------</option>
                <option value="linkedIn">LinkedIn</option>
                <option value="friends">Friends</option>
                <option value="job portals">Job Portals</option>
                <option value="others">Others</option>
            </select>
          </div>
          <div  className="input">
            <LocationCityRoundedIcon color="action"/>
            <label htmlFor="city">City:</label>
            <select name="city" id="city" className="dropdown" value={user.city} onChange={handleUser}>
                <option value="">--------</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="pune">Pune</option>
                <option value="Ahemdabad">Ahemdabad</option>
            </select>
          </div>
          <div className="input">
          <RoofingRoundedIcon color="action"/>
            <label htmlFor="state">State:</label>
            <select name="state" className="dropdown" id="state" value={user.state} onChange={handleUser}>
                <option value="">--------</option>
                <option value="gujrat">Gujrat</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
            </select>
          </div>
        </div>
        {message && (
          <div
            className="message"
            style={{
              color: message === "User has been created!" ? "green" : "red",
            }}
          >
            {message}
          </div>
        )}
        <div className="submit-container">
          <div className="submit" onClick={registerUser}>
            Sign Up
          </div>
          <div className="submit" onClick={() => navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;