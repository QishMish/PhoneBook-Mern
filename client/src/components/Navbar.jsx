import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { userLogOut} from "../redux";

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
                <span>{JSON.parse(localStorage.getItem('user'))}</span>
            </div>
            <div className="log-out">
                <button className="logout" onClick={userLogOutHandler}>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar
