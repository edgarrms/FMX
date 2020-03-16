import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="navbar navbar-light bg-danger">
            <div>
                <h1><Link to="home">FMX</Link></h1>
                <p>Fu*k My eX!</p></div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
        </div>

    );
}