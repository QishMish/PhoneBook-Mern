import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBack2Line, } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
function Person() {
    return (
        <div className="person">
            <div className="left">
                <div className="person-data">
                    <FaPhoneAlt className="icon-call"/>
                    <div className="name">Misho</div>
                    <div className="phone-num">98321709</div>
                </div>
            </div>
            <div className="right">
                <div className="control-icons">
                    <FiEdit className="icon-edit" />
                    <RiDeleteBack2Line className="icon-del"/>
                </div>
            </div>
        </div>
    )
}

export default Person
