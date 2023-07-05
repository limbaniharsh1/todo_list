import React, { useEffect, useState } from "react";
import { googleauth } from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { Authemail } from "../redux/Action";
import axios from "axios";

function Signup() {
  let[email,setEmail]=useState('')
  var data=[]
  var rec = JSON.stringify(data)
  let localemail = JSON.parse(localStorage.getItem("record"));

  let handlemail = () => {
    let only = true; // Flag variable
  
    axios.get(`http://localhost:3003/posts`).then((res) => {
      res.data.filter((e, i) => {
        if (e.email !== localemail) {
          only = true;
        } else {
          only = false;
        }
      });
  
      if (only) {
        console.log("posts new email");
      } else {
        console.log("old email");
      }
    });
  };

  useEffect(() => {
    handlemail()
  }, [])
  

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
