import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logOut, userLogOut} from "../redux";

function Navbar() {
    const dispatch = useDispatch()
    let navigate = useNavigate();


    const userLogOutHandler = () => {
        try {
            dispatch(userLogOut())
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="navbar">
            <div className="user">
                <span className="username">UserName : </span>
                <span>Misho</span>
            </div>
            <div className="log-out">
                <button className="logout" onClick={userLogOutHandler}>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar
