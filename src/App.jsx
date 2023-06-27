import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Adddb } from "./redux/Action";
import Task from "./components/Task";

function App() {
  let [task, setTask] = useState("");
  let [date, setDate] = useState("");

  let dispatch = useDispatch();
  const getdata = () => {
    axios
      .get("http://localhost:3003/posts")
      .then((res) => dispatch(Adddb(res.data.reverse())));
  };
  const handleform = (e) => {
    e.preventDefault();
    // console.log(task,date)
    axios.post("http://localhost:3003/posts", {
      task: task,
      date: date,
    });
    getdata();
  };

  const data = useSelector((store) => store.data);

  data.map((i, e) => {
    // console.log(i.date)
    <Task />;
  });

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleform} className="form">
        enter your task :{" "}
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        enter date :{" "}
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
      {data.map((e,i) => <Task {...e} key={i}/>
      )}
    </div>
  );
}

export default App;
