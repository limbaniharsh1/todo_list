import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Adddb } from "../redux/Action";

function Task(props) {
  var dispatch = useDispatch();
  const task=props.task
  const handlecolor={
    // color:task.length<=5?'red':'blue'
    // color:task.length>=10?(task.length>=10 && task.length<=24 ? 'blue':'green'):'red',
  }

  return (
    <div className="container row justify-content-between">
      <div>{props.date}</div>
      <div style={handlecolor}>{props.task}</div>
      <div className="btns">
        <button
          type="submit"
          id={props.id}
          onClick={(e) => props.update(e.target.id,props.task,props.date,props.todokey)}
        >
          {}
          Update
        </button>
        <button
          id={props.todokey}
          type="submit"
          onClick={(e) => props.handledel(e.target.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
