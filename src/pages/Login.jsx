import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Evil Chat</span>
                <span className="title">Login</span>
                <form className="form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn">Sing in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    );
};

export default Login;