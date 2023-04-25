// Import modules
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Import firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            //Create user
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Evil Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn">Sing up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;