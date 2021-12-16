import React,{useState} from 'react'
import Input from "./Input";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import {loginStart,loginSuccess,loginFailure, userLogIn} from "../redux";

function Login() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
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
        errorMessage:"Username must be 4-16 characters",
        label: "Username",
        pattern: "^[A-Za-z0-9]{4,16}$",
        required: true,
        },
        {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:"Password must be 6-20 characters!",
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
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {confirmPassword, ...other} = values;
        dispatch(userLogIn(other))
        !user.error && navigate("/dashboard")
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















// import React,{useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import { useDispatch,useSelector } from 'react-redux'
// import {loginStart,loginSuccess,loginFailure, userLogIn} from "../redux";
// function Login() {

//     const dispatch = useDispatch()
//     const user = useSelector(state => state.user)
//     let navigate = useNavigate();
//     const [inputValues, setInputValues] = useState({
//         username: "",
//         password: "",
//       });
//     const [errorMsg, setErrorMsg] = useState()
    
//     const onChangeHandler = (e) => {
//         setInputValues(
//                 { 
//             ...inputValues, 
//             [e.target.name]: e.target.value 
//             }
//         );
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const {confirmPassword, ...other} = inputValues;
//         dispatch(userLogIn(other))
//         user.error !== true && navigate("/dashboard");
//     };

//     return (
//         <div className="landing-page-container">
//             <div className="login-container">
//                 <form className="login-form" onSubmit={handleSubmit}>
//                     <h2>Sign In To Account</h2>
//                     <label>
//                         Username:
//                     </label>
//                     <input type="text" name="username" className='border' required placeholder='Username'  onChange={onChangeHandler}/>
//                     <label>
//                         Password:
//                     </label>
//                     <input type="password" name="password" className='border' required placeholder='Password'  onChange={onChangeHandler} />
//                     <input type="submit" value="Sign In" />
//                     {
//                         user.error && <span>Incorrect Credentials</span> 
//                     }
//                 </form>
//                 <div className="right-panel">
//                     <h2>Welcome To PhoneBook App</h2>
//                     <p>Sign up get access to all users data </p>
//                 </div>
//             </div>
//          </div>
//     )
// }

// export default Login
