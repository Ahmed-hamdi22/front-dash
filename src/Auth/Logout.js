import axios from "axios";
import React from "react";
import { LOGOUT, baseURl } from "../Api/Api";
import Cookie from "cookie-universal"
const Logout = () => {
    const cookie = Cookie();
    const token = cookie.get("e-commerce");
  async function handellogout() {
    try {
     const res = await axios.get(`${baseURl}/${LOGOUT}`,{
        headers:{
            Authorization: "Bearer " +token,
    
        },
      });
      window.location.pathname ="/";
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <div>
      <button  onClick={handellogout}>Logo out</button>
    </div>
  );
};

export default Logout;
