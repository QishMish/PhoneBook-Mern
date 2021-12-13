import React from 'react'

function Register() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Sign In To Account</h2>
                <label>
                    Username:
                </label>
                <input type="text" name="username" placeholder='Username'/>
                <label>
                    Password:
                </label>
                <input type="text" name="password" placeholder='Password' />
                <input type="submit" value="Sign In" />
            </form>
            <div className="right-panel">
                <h2>Welcome To PhoneBook App</h2>
                <p>Sign up get access to all users data </p>
            </div>
        </div>
    )
}

export default Register
