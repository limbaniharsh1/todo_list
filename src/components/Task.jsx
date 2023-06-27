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
    console.log(id);
    axios.delete(`http://localhost:3003/posts/${id}`);
    getdata();
  };

  const task=props.task
  const handlecolor={
    // color:task.length<=5?'red':'blue'
    color:task.length>=10?(task.length>=10 && task.length<=24 ? 'blue':'green'):'red',
  }

  return (
    <div className="container row justify-content-between">
      <div>{props.date}</div>
      <div style={handlecolor}>{props.task}</div>
      <div className="btns">
        <button
          type="submit"
          id={props.id}
          onClick={(e) => props.update(e.target.id,props.task,props.date)}
        >
          Update
        </button>
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
