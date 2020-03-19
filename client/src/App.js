import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home"
import './App.css';
import SignUp from "./components/signup"
import SignIn from "./components/signin"
import Profile from "./components/profile/index.js";
import Counter from "./components/card/counter"
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/">
            <Home/>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;