import React,{useState} from 'react'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBack2Line, } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { RemovePerson,EditPerson } from '../redux'


function Person({person}) {

    const dispatch = useDispatch()
    const {id, name, phone_number} = person
    const [editMode, setEditMode] = useState(false)
    const [editPersonValues, setEditPersonValues] = useState({
        
        name: name,
        phone_number: phone_number,
      });


    const onChangeHandler = (e) => {
        setEditPersonValues(
                { 
            ...editPersonValues, 
            [e.target.name]: e.target.value 
            }
        );
    };

     //edit person
    const editPersonHandler = ()=>{
        editPersonValues.id = id;
        dispatch(EditPerson(editPersonValues))
        setEditMode(!editMode);
    }
    const CallerHandler = ()=>{
        
    }


    return (
        <div className="person">
            <div className="left">
                <div className="person-data">
                    <FaPhoneAlt className="icon-call"/>
                    {
                        !editMode ? (
                            <>
                                <div className="name">{name}</div>
                                <div className="phone-num">{phone_number}</div>
                            </>
                        ) : (
                            <>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="edit-input" 
                                    placeholder='name' 
                                    value={editPersonValues.name} 
                                    onChange={onChangeHandler} 
                                />
                                <input 
                                    type="number" 
                                    name="phone_number" 
                                    className="edit-input"  
                                    placeholder='number' 
                                    value={editPersonValues.phone_number}  
                                    onChange={onChangeHandler} 
                                />
                                <AiFillCheckCircle className="icon-edit" onClick={editPersonHandler} />
                            </>
                        )
                    }
                </div>
            </div>
            <div className="right">
                <div className="control-icons">
                    <FiEdit className="icon-edit" onClick={()=> setEditMode(!editMode)} />
                    <RiDeleteBack2Line className="icon-del" onClick={() => {dispatch(RemovePerson(id)) }}/>
                </div>
            </div>
        </div>
    )
}

export default Person
