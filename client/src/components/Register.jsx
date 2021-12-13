import React from 'react'

function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h2>Sign Up To Account</h2>
                <label>
                    Username:
                </label>
                <input type="text" name="username" placeholder='Username'/>
                <label>
                    Password:
                </label>
                <input type="text" name="password" placeholder='Password' />
                <label>
                    Confirm Password:
                </label>
                <input type="text" name="confirmPassword" placeholder='Confirm Password' />
                <input type="submit" value="Sign Up" />
            </form>
            <div className="right-panel">
                <h2>Welcome To PhoneBook App</h2>
                <p>Sign up get access to all users data </p>
            </div>
        </div>
    )
}

export default Register
