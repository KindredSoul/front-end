import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem( "token" );
  return axios.create( {
    baseURL: "https://event-planner-pt.herokuapp.com/", headers: {
      "Content-Type": "application/json", "Authorization": token
      
    },
  } );
};