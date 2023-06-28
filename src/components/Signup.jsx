import React, { useState } from "react";
import { googleauth } from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { Authemail } from "../redux/Action";

function Signup() {

    let dispatch = useDispatch()
    const handlesignup =()=>{
      googleauth().then((userdetails)=>dispatch(Authemail(userdetails._tokenResponse.email)))
    }
  return <div>
    <button onClick={handlesignup}>sign up google</button>
  </div>;
}

export default Signup;
