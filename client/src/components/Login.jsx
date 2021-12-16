import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import {loginStart,loginSuccess,loginFailure, userLogIn} from "../redux";
function Login() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    let navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
      });
    const [errorMsg, setErrorMsg] = useState()
    
    const onChangeHandler = (e) => {
        setInputValues(
                { 
            ...inputValues, 
            [e.target.name]: e.target.value 
            }
        );
    };

    // localStorage.setItem('bgcolor', 'red')
    const handleSubmit = async(e) => {
        e.preventDefault();
        const {confirmPassword, ...other} = inputValues;
        dispatch(userLogIn(other))
        user.error !== true && navigate("/dashboard");
        // try {
        //     const {confirmPassword, ...other} = inputValues;
        //     const res = await axios.post('/auth/login', other)
        //      setErrorMsg('')
        //      dispatch(loginSuccess(res.data.data.username));
        //      navigate("/dashboard");
        //  } catch (err) {
        //      dispatch(loginFailure());
        //      setErrorMsg("Incorrect username of password");
        //  }
    };
    return (
        <div className="landing-page-container">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Sign In To Account</h2>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" className='border' placeholder='Username'  onChange={onChangeHandler}/>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" className='border' placeholder='Password'  onChange={onChangeHandler} />
                    <input type="submit" value="Sign In" />
                    {
                        user.error && <span>Incorrect Credentials</span> 
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
