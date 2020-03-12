import React from "react"

export default function Card(props){
    return(
        <div className="card text-center">
  <div className="card-header">
    {props.userName}
  </div>
  <div className="card-body">
    <input type="text" id="input1" className="form-control"></input>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <a href="#" className="btn btn-primary">Go somewhere</a>

  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
    )
}