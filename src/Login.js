import React from 'react'
import "./Login.css"


function Login() {
    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/linkedin-png-logo-23.png" alt="" />

            <form>
                <input placeholder="Full name (required if registering)" type="text" />
            </form>
        </div>
    )
}

export default Login
