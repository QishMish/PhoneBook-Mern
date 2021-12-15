import React,{useState} from 'react'
import Person from './Person'
import { useSelector, useDispatch } from 'react-redux'

function People() {

    const people = useSelector(state => state.people.people)
    const [input, setInput] = useState('');
    const [newPersonValues, setNewPersonValues] = useState({
        name: "",
        number: "",
      });

    const inputHandler=(e)=>{
        setInput(e.target.value)
      }

    const onChangeHandler = (e) => {
        setNewPersonValues(
                { 
            ...newPersonValues, 
            [e.target.name]: e.target.value 
            }
        );
    };
    //searching person
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(input.toLowerCase()) || person.phone_number.split("-").join("").includes(input) 
      );

    return (
            <>
                <div className="search-bar">
                    <form className="search">
                        <input type="text" name="search" placeholder='Search For People' value={input} onChange={inputHandler} />
                    </form>
                </div>
                <div className="people">
                    <form className="search">
                        <label>Add People</label>
                        <input type="text" name="name" placeholder='Name' value={newPersonValues.name} onChange={onChangeHandler}/>
                        <input type="number" name="number" placeholder='Phone Number' value={newPersonValues.number}  onChange={onChangeHandler}/>
                        <input type="submit" value="Add"/>
                    </form>
                    <div className="people-list">
                        {
                            filteredPeople.length < 1 
                            ?
                                <h1 className='not-found'>Person Not Found</h1>
                            :
                            filteredPeople.map(person =><Person key = {person.id} name={person.name} phone = {person.phone_number} />)
                        }
                    </div>
                </div>
            </>
        
    )
}

export default People
