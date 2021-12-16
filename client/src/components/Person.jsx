import React,{useState} from 'react'
import axios from 'axios'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBack2Line, } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { RemovePerson,EditPerson } from '../redux'
import Swal from 'sweetalert2'

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
    const CallerHandler = async()=>{
        // const targetName = "dada";
        // const targetPhoneNumber = "dada";
        // const callerName = "dada";
        // const time = Date.now
        // try {
            
        //     const res = await axios.post('/auth/call', {targetName,targetPhoneNumber,callerName})
        //  } catch (err) {
        //      console.log(err);
        //  }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            html:
            'You can use <b>bold text</b>, ' +
            '<a href="//sweetalert2.github.io">links</a> ' +
            'and other HTML tags',
            title: 'Your Call Succesfully Recorded To Datebase ',
            showConfirmButton: false,
            timer: 1500
          })
    }


    return (
        <div className="person">
            <div className="left">
                <FaPhoneAlt className="icon-call" onClick={CallerHandler}/>
                <div className="person-data">
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
                            </>
                        )
                    }
                </div>
                {editMode && <AiFillCheckCircle className="icon-edit" onClick={editPersonHandler} />}
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
