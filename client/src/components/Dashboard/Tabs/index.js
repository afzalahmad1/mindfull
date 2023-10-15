import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Grid from "../Grid";
import List from '../List'
import './styles.css'

export default function TabsComponent({ users ,setAddUser,setId , setFlag,  deleteUser}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",

    fontSize: "1.2rem",
    fontFamily: "inter",
    textTransform: "Capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
             {
              !users.length === 0?
              <p style={{color:"red"}}>No Data Found</p>
              :
              (
              users.map((user,idx)=>{
                return <Grid user={user} setId={setId} setAddUser={setAddUser} setFlag={setFlag} deleteUser={deleteUser} key={user._id}/>
              })
              )
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div className="list-table">
            <div className="list-table">
            {
              !users.length === 0?
              (
               <p>No Data Found</p>
               )
              :
              (users.map((user,idx)=>{
                return(
                  <List  user={user} setAddUser={setAddUser} setId={setId} setFlag={setFlag} deleteUser={deleteUser}  key={user._id}/>
                  )
                })
              )
              }
              </div>
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}