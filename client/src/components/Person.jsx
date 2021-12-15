import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBack2Line, } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { RemovePerson } from '../redux'


function Person({name, phone}) {

    const dispatch = useDispatch()

    return (
        <div className="person">
            <div className="left">
                <div className="person-data">
                    <FaPhoneAlt className="icon-call"/>
                    <div className="name">{name}</div>
                    <div className="phone-num">{phone}</div>
                </div>
            </div>
            <div className="right">
                <div className="control-icons">
                    <FiEdit className="icon-edit" />
                    <RiDeleteBack2Line className="icon-del" onClick={() => dispatch(RemovePerson())}/>
                </div>
            </div>
        </div>
    )
}

export default Person
