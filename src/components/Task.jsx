import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Adddb } from "../redux/Action";

function Task(props) {
  //   console.log(props.date);
  var dispatch = useDispatch();

  const getdata = () => {
    axios
      .get("http://localhost:3003/posts")
      .then((res) => dispatch(Adddb(res.data)));
  };
  
  useEffect(() => {
    getdata();
  }, []);

  const handledel = (id) => {
    // axios.delete(`http://localhost/3003/posts/${id}`)
    // .then(()=>getdata())
    // console.log(id)
    // getdata();
    console.log(id)
    axios.delete(`http://localhost:3003/posts/${id}`)
    getdata()
  };

  return (
    <div className="container row justify-content-between">
      <div>{props.date}</div>
      <div>{props.task}</div>
      <div className="btns">
        <button type="submit">Update</button>
        <button
          id={props.id}
          type="submit"
          onClick={(e) => handledel(e.target.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
