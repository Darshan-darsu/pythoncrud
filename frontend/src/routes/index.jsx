import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

const Routesapp=()=>{
    return (
        <>
        <Router >
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/register"element={<Register/>}/>
            <Route exact path="/dashboard" element={<Login/>}/>
        </Routes>
        </Router>
        </>
    )
}

export default Routesapp