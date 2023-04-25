// Import modules
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Import firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Evil Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
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