import React from 'react'
import Person from './Person'
import { useSelector, useDispatch } from 'react-redux'

function People() {

    const people = useSelector(state => state.people.people)
    const dispatch = useDispatch()

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
                {
                    people.map(person =><Person key = {person.id} name={person.name} phone = {person.phone_number}/>)
                }
            </div>
        </div>
    )
}

export default People
