import { useEffect, useState } from "react";
import Search from "../components/Dashboard/Search";
import Tabs from "../components/Dashboard/Tabs";
import axios from "axios";
import Add from "../components/Dashboard/Add";

const Dashboard = ()=>{
    const [search,setSearch] = useState("")
    const [users,setUsers] = useState([])
    const [reload,setReload] = useState(false)
    const [addUserMessage,setAddUserMessage] = useState("")
    const [addUser,setAddUser] = useState({
        name: "",
        email: "",
        phone: ""
      })
      const [id,setId] = useState();
    
    const [flag,setFlag] = useState(false)

    useEffect(()=>{
        setInterval(() => {
            setAddUserMessage("")
        }, 10000);
        getAllUsers()
    },[reload])
    const getAllUsers = async()=>{
        try {
            const res = await axios.get(`https://mindfull-klo6.onrender.com/user/getAllUsers`)
            setUsers(res.data.allUsers);

        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser = async(e,id)=>{
        e.preventDefault()
        // console.log("id",id);
        try {

            const res = await axios.delete(`https://mindfull-klo6.onrender.com/user/delete/${id}`)
            // console.log("res",res);
            if(res.data.message === "User is deleted successfully"){
                setReload(!reload)
                alert("User is deleted successfully")
            }else{
                alert("Error")
            }
        } catch (error) {
            console.log(error)
        }
    }
 
    const handleUpdate = async()=>{
        // console.log("id",id);
        let updateObj = {
            id: id,
            name: addUser.name,
            email: addUser.email,
            phone: addUser.phone
        }
        try {

            const res = await axios.put(`https://mindfull-klo6.onrender.com/user/update`,updateObj)
            console.log("res",res);
            if(res.data.message === "User succesfully updated!"){
                alert("User succesfully updated!")
                setReload(!reload)
            }else{
                alert("something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleAdd = (e) => {
        axios
          .post(`https://mindfull-klo6.onrender.com/user/addUser`, addUser)
          .then((res) => {
            // console.log(res.data.data.token);
            // console.log(res.data.message);
            setAddUserMessage(res.data.message);
            setReload(!reload)
          })
          .catch((err) => {
            console.log(err);
          });
      };

    var filteredUser = users.filter((item)=>{
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
        )
      })
    return(
        <div>
            {/* {!users.length === 0 && <p>No Data Found</p> } */}
            {flag && <Add addUser={addUser} handleUpdate={handleUpdate} setAddUser={setAddUser}  addUserMessage={addUserMessage} handleAdd={handleAdd}/> }
            <Search  search={search} setSearch={setSearch} flag={flag} setFlag={setFlag}/>
            <Tabs users={search? filteredUser : users} setId={setId} setFlag={setFlag} setAddUser={setAddUser} deleteUser={deleteUser}/>
        </div>
    )
}
export default Dashboard;