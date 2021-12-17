import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Input from "./Input";


const Register = () => {

    let navigate = useNavigate();

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
        errorMessage:"Username must be 4-16 characters and must include only letters!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{4,16}$",
        required: true,
        },
        {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:"Password must be 6-20 characters and  must contain at least one letter!",
        label: "Password",
        pattern: `^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
        required: true,
        },
        {
        id: 3,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
        }
    ];


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {confirmPassword, ...other} = values;
            const res = await axios.post('auth/register', other)
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        };

    const onChange = (e) => {
        setValues(
                { 
                    ...values, 
                    [e.target.name]: e.target.value 
                }
            );
        };
        return (
                <div className="register-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h2>Sign Up To Account</h2>
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
                        <input 
                            type="submit" 
                            value="Sign Up"  
                        />
                    </form>
                    <div className="right-panel">
                        <h2>Welcome To PhoneBook App</h2>
                        <p>Sign up get access to all users data </p>
                    </div>
                </div>
            )
};

export default Register;



// import React,{useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Register() {

//     let navigate = useNavigate();

//     const [inputValues, setInputValues] = useState({
//         username: "",
//         password: "",
//         confirmPassword: "",
//       });
//     const [errorMsg, setErrorMsg] = useState('')
//     const [focused, setFocused] = useState(false);
    
//     const inputs = [
//         {
//             name: "username",
//             type: "text",
//             placeholder: "Username",
//             label: "Username",
//             errorMsg:"Username Can not be less than 4 characters and more than 25 characters!",
//             pattern: "^[A-Za-z0-9]{4,25}$",
//             required: true,
//         },
//         {
//             name: "password",
//             type: "password",
//             placeholder: "Password",
//             label: "Password",
//             errorMsg:"password Can not be less than 6 characters and more than 55 characters!",
//             pattern: `^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,55}$`,
//             required: true,
//         },
//         {
//             name: "confirmPassword",
//             type: "password",
//             placeholder: "Confirm Password",
//             errorMsg: "Passwords do not match!",
//             label: "Confirm Password",
//             pattern: inputValues.password,
//             required: true,
//         },
//     ];

//     const handleFocus = (e) => {
//         setFocused(true);
//       };
   
//     const onChangeHandler = (e) => {
//         setInputValues(
//                 { 
//             ...inputValues, 
//             [e.target.name]: e.target.value 
//             }
//         );
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const {confirmPassword, ...other} = inputValues;
//             const res = await axios.post('/register', other)
//              setErrorMsg('')
//              navigate("/login");
//          } catch (err) {
//              console.log(err);
//              setErrorMsg('something went wrong');
//          }
//     };

//     return (
//         <div className="register-container">
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <h2>Sign Up To Account</h2>
//                 {
//                     inputs.map((input,key) => {
//                         const {label, errorMessage, id, ...other } = input
//                         return (
//                                 <>
//                                     <label>{input.label}:</label>
//                                     <input
//                                         {...other}
//                                         type={input.type}
//                                         name={input.name}
//                                         className='border' 
//                                         placeholder={input.placeholder}
//                                         value={inputValues[input.name]} 
//                                         onChange={onChangeHandler}
//                                         onBlur={handleFocus}
//                                         onFocus={() =>
//                                             input.name === "confirmPassword" && setFocused(true)
//                                         }
//                                         focused={focused.toString()}
//                                     />
//                                     <span className="error">{input.errorMsg}</span>
//                                 </>
//                             )
                        
//                     } )
//                 }
//                 <input 
//                     type="submit" 
//                     value="Sign Up"  
//                 />
//             </form>
//             <div className="right-panel">
//                 <h2>Welcome To PhoneBook App</h2>
//                 <p>Sign up get access to all users data </p>
//             </div>
//         </div>
//     )
// }

// export default Register



{/* <label>Username:</label>
                <input 
                    {...input[0]}
                    type="text" 
                    name="username" 
                    className='username border'
                    placeholder='Username' 
                    required 
                    value={inputValues[input.name]}
                    onChange={onChangeHandler}
                    onBlur={handleFocus}
                    onFocus={() =>
                        input[0].name === "confirmPassword" && setFocused(true)
                    }
                    focused={focused.toString()}
                    />
                <span className="error">{input[0].errorMsg}</span>
                <label>Password:</label>
                <input
                    {...input[1]}
                    type="password" 
                    name="password" 
                    className='password border' 
                    placeholder='Password' 
                    required  
                    value={inputValues[input.name]} 
                    onChange={onChangeHandler}
                    onBlur={handleFocus}
                    onFocus={() =>
                        input[1].name === "confirmPassword" && setFocused(true)
                    }
                    focused={focused.toString()}
                />
                <span className="error">{input[1].errorMsg}</span>
                <label>Confirm Password:</label>
                <input 
                    {...input[2]}
                    type="password" 
                    name="confirmPassword" 
                    className='confirmPassword border' 
                    placeholder='Confirm Password' 
                    required 
                    value={inputValues[input.name]}  
                    onChange={onChangeHandler}
                    onBlur={handleFocus}
                    onFocus={() =>
                        input[2].name === "confirmPassword" && setFocused(true)
                    }
                    focused={focused.toString()}  
                />
                <span className="error">{input[2].errorMsg}</span> */}