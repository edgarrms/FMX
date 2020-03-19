import React, { useEffect, useState } from "react";
import getJoke from "../../utils/jokes";
// import { response } from "express";

export default function jumbotron(){
  const [joke, setJoke] = useState("");
  useEffect(()=>{
getJoke()
    .then(response => {
      const newJoke = response.data.setup + " - " + response.data.punchline;
      setJoke(newJoke);
    })
    .catch(ex => console.log(ex));
  },[])
    return(
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Daddy's joke today!</h1>
    <h3>{joke}</h3>
  </div>
</div>
    )
}