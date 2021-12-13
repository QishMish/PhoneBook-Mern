import React from 'react'
import Person from './Person'
function People() {
    return (
        <div className="people">
             <div className="search-bar">
                <form className="search">
                    <label>Add People</label>
                    <input type="text" name="Name" placeholder='Name'/>
                    <input type="number" name="number" placeholder='Phone Number'/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
            <div className="people-list">
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>
        </div>
    )
}

export default People
