import React from 'react'
import Navbar from '../components/Navbar'
import People from '../components/People'

function DashBoard() {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="search-bar">
                <form className="search">
                    <input type="text" name="search" placeholder='Search For People'/>
                </form>
            </div>
            <People />
        </div>
    )
}

export default DashBoard
