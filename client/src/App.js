import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
