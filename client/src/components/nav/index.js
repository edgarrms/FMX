import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Nav() {
    return (

        <div className="navbar navbar-light bg-danger">
            <h1>FMX</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
        </div>



    );
}