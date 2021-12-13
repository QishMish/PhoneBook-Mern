import React,{useState} from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

function LandingPage() {
    const [register, setRegister] = useState(true);
    return (
        <div className="landing-page-container">
            {
                register ? <Register /> 
                : <Login />
            }
           
        </div>
    )
}

export default LandingPage
