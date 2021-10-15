import React from 'react'
import "./Login.css"


function Login() {

    const loginToApp = () => {};

    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/linkedin-png-logo-23.png" alt="" />

            <form>
                <input placeholder="Full name (required if registering)" type="text" />
                <input placeholder="Profile pic URL (OPTIONAL)" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Submit</button>
            </form>
        </div>
    )
}

export default Login
