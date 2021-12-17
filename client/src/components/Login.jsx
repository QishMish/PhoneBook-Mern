import React,{useState} from 'react'
import Input from "./Input";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {loginStart,loginSuccess,loginFailure} from "../redux";
import {Link} from "react-router-dom";

function Login() {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState()
    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:"",
        label: "Username",
        pattern: "^[A-Za-z0-9]{4,16}$",
        required: true,
        },
        {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:"",
        label: "Password",
        pattern: `^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
        required: true,
        }
    ];

    const onChange = (e) => {
        setValues(
                { 
                    ...values, 
                    [e.target.name]: e.target.value 
                }
            );
        };
    const handleSubmit = (e) => {
        e.preventDefault();
        const {confirmPassword, ...other} = values;
        dispatch(loginStart())
        axios
        .post('/auth/login', other)
        .then(response => {
            const user = response.data.data.username;
            dispatch(loginSuccess(user))
            navigate('/dashboard')
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
            setErrorMsg(error.response.data)
        })
    };

    return (
        <div className="landing-page-container">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Sign In To Account</h2>
                    { 
                        inputs.map((input,index) => (
                            <Input
                                key={index}
                                {...input}
                                key={input.id}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))
                    }
                    <input type="submit" value="Sign In" />
                    {
                         errorMsg && <span className="auth-error">{errorMsg}</span> 
                    }
                    <Link to={'/'}>
                        <button className='sign-in-btn' >Sing Up</button>
                    </Link>
                </form>
                <div className="right-panel">
                    <h2>Welcome To PhoneBook App</h2>
                    <p>Sign up get access to all users data </p>
                </div>
            </div>
         </div>
    )
}

export default Login
