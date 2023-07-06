import React, { useEffect, useState } from "react";
import { googleauth } from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { Authemail } from "../redux/Action";
import axios from "axios";

function Signup() {
  let[email,setEmail]=useState('')
  var data=[]
  var rec = JSON.stringify(data)

  let dispatch = useDispatch()
  const handlesignup =()=>{
    // googleauth().then((userdetails)=>dispatch(Authemail(userdetails._tokenResponse.email)))
    googleauth().then((userdetails)=>{
      dispatch(Authemail(userdetails._tokenResponse.email))
      localStorage.setItem('record',JSON.stringify(userdetails.user.email))
    })
  }
  console.log(email+'my')
  return <div>
    <button onClick={handlesignup} className="signup">sign up google</button>
  </div>;
}

export default Signup;
