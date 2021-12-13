import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <div className="user">
                <span className="username">UserName : </span>
                <span>Misho</span>
            </div>
            <div className="log-out">
                <button className="logout">Log Out</button>
            </div>
        </div>
    )
}

export default Navbar
