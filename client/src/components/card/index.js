import React from "react"
import Form from "../form"

export default function Card(props){
    return(
        <div className="card text-center">
  <div className="card-header">
    {props.userName}
  </div>
  <div className="card-body">
      <Form />
    <a href="#" className="btn btn-danger">Take a beer dude!</a>
    <a href="#" className="btn btn-outline-danger">You better go!</a>

  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
    )
}