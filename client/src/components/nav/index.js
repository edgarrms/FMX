import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="navbar navbar-light bg-danger">
            <div>
                <h1 ><Link className="home-nav" to="home">FM<img src="https://img.icons8.com/ios-filled/50/000000/x.png" /></Link></h1>
                <p>Fu*k My eX!</p></div>
            {/* <div ><Link className="profile-link" to="/profile">Profile </Link></div> */}
            <div ><Link className="sign-up-link" to="/signup">Sign Up</Link></div>
            <div ><Link className="sign-in-link" to="/signin">Sign In</Link></div>
        </div>

    );
}