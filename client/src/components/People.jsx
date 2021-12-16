import React,{useState} from 'react'
import Person from './Person'
import { useSelector, useDispatch } from 'react-redux'
import { AddPerson } from '../redux'
import { v4 as uuidv4 } from 'uuid';

function People() {

    const dispatch = useDispatch()

    const people = useSelector(state => state.people.people)
    const [input, setInput] = useState('');
    const [newPersonValues, setNewPersonValues] = useState({
        name: "",
        phone_number: "",
      });

    const inputHandler=(e)=>{
        setInput(e.target.value)
      }

    console.log(people)
    const onChangeHandler = (e) => {
        setNewPersonValues(
                { 
            ...newPersonValues, 
            [e.target.name]: e.target.value 
            }
        );
    };

    //add person
    const addPersonToList = (e)=>{
        e.preventDefault();
        newPersonValues.id = uuidv4();
        dispatch(AddPerson(newPersonValues))
    }  
   
    //searching person
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(input.toLowerCase()) 
        || person.phone_number.includes(input) 
      );

    return (
            <>
                <div className="search-bar">
                    <div className="search">
                        <input type="text" name="search" placeholder='Search For People' value={input} onChange={inputHandler} />
                    </div>
                </div>
                <div className="people">
                    <form className="search" onSubmit={addPersonToList}>
                        <label>Add People</label>
                        <input type="text" name="name" required placeholder='Name' value={newPersonValues.name} onChange={onChangeHandler}/>
                        <input type="number" name="phone_number" required placeholder='Phone Number' value={newPersonValues.phone_number}  onChange={onChangeHandler}/>
                        <input type="submit" value='Add'/>
                    </form>
                    <div className="people-list">
                        {
                            filteredPeople.length < 1 
                            ?
                                <h1 className='not-found'>Person Not Found</h1>
                            :
                            filteredPeople.map(person =><Person  key = {person.id} person = {person} />)
                        }
                    </div>
                </div>
            </>
        
    )
}

export default People
