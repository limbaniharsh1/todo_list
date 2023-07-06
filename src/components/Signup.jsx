import React, { useEffect, useState } from "react";
import { googleauth } from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { Authemail } from "../redux/Action";

function Signup() {
  let[email,setEmail]=useState('')

  let dispatch = useDispatch()
  const handlesignup =()=>{
    googleauth().then((userdetails)=>{
      dispatch(Authemail(userdetails._tokenResponse.email))
      localStorage.setItem('record',JSON.stringify(userdetails.user.email))
    })
  }
  return <div>
    <button onClick={handlesignup} className="signup">sign up google</button>
  </div>;
}

export default Signup;