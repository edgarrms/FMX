import React from "react"
import Form from "../form"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header"><Link className="x-logo" to="/profile">{props.userName} </Link>

      </div>
      <div className="card-body">
        <Form />
        <button className="btn btn-danger" onClick={props.handleIncrement}><a className="card-text">Take a beer dude! {props.count}</a></button>
        <a>  </a>
        <button className="btn btn-outline-danger" onClick={props.handleIncrement2}>You better leave! {props.count}</button>

      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>
  )
}