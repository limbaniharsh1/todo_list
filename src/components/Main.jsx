// import logo from "./logo.svg";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Adddata, Adddb, Authemail } from "../redux/Action";
import Task from "../components/Task";
import { googleauth, signout } from "../Config";
import Signup from "../components/Signup";
import { Auth_email } from "../redux/ActionType";
import { getAuth } from "firebase/auth";

function Main() {
  let [task, setTask] = useState("");
  let [date, setDate] = useState("");
  let [myid, setMyid] = useState();
  let [email, setEmail] = useState("");
  let [user, setUser] = useState("");
  let [filtered, setFiltered] = useState();
  let [todos, setTodos] = useState();
  let [newdate, setNewdate] = useState("");

  let fetchdata = useSelector((store) => store.data);
  let fetchemail = useSelector((store) => store.email);
  // let myfilter = fetchdata.filter((e) => e.email === fetchemail);
  console.log(fetchdata);

  let dispatch = useDispatch();
  const getdata = () => {
    axios.get("http://localhost:3003/posts").then((res) => {
      res.data.filter((ele) => {
        if (ele.email === "limbaniharsh1@gmail.com") {
          setUser(ele)
          setTodos(ele.todos)
          dispatch(Adddb(ele.todos));
        }
      });
    });
  };
  const handleupdate = (e, t, d) => {
    setDate(d);
    setTask(t);
    setMyid(e);
    console.log(myid);
    // getdata()
  };

  const submit = () => {
    todos.push({task:task,date:date});
    axios.patch(`http://localhost:3003/posts/1`,user);
    getdata()
  };

  const edit = () => {
    axios.patch(`http://localhost:3003/posts/${myid}`, {
      task: task,
      date: date,
    });
    alert("update");
    getdata();
  };

  const handleform = (e) => {
    e.preventDefault();
    if (myid == "" || myid == null) {
      submit();
    } else {
      edit();
    }
    setDate("");
    setTask("");
    setMyid("");
    // getdata();
  };

  const data = useSelector((store) => store.data);

  getAuth();
  const handlesignout = () => {
    signout().then(() => dispatch(Authemail("")));
    localStorage.setItem("record", "");
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <button className="signout" onClick={handlesignout}>
        sign out
      </button>
      <form onSubmit={handleform} className="form">
        enter your task :{" "}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        enter date :{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      {data.length > 0 &&
        data.map((e, i) => <Task {...e} update={handleupdate} key={i} />)}
    </div>
  );
}

export default Main;