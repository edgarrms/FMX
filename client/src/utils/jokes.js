import axios from "axios";

export default function getJoke() {
  return axios({
  method:"GET",
  url:"https://dad-jokes.p.rapidapi.com/random/jokes",
  headers:{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"dad-jokes.p.rapidapi.com",
  // "x-rapidapi-key":"4d4476a817msh7d7a0835c290b4bp1e5ddbjsncb1087971f09"
  }
  });

}