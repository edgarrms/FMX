import React, { useEffect } from "react"
import getJoke from "../../utils/jokes"

export default function jumbotron(){
  useEffect(()=>{
console.log(getJoke());
  },[])
    return(
        <div className="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 className="display-4">Daddy's Joke here!</h1>
  </div>
</div>
    )
}