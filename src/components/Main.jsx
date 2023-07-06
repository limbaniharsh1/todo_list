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
  // console.log(myid)

  let fetchdata = useSelector((store) => store.data);
  let fetchemail = useSelector((store) => store.email);
  // let myfilter = fetchdata.filter((e) => e.email === fetchemail);
  let localemail = JSON.parse(localStorage.getItem("record"));
  let testemail = false;
  // console.log("email : "+fetchemail)

  let filtereddata = (res) =>{
    var val = res.filter((e,i)=>e.email === localemail)
    if(val.length>0){
      console.log("old email")
    }
    else{
      axios.post(`http://localhost:3003/posts`,{
        email:localemail,
        todos:[]
      })
    }
  }
  
  let handlemail = () => {
    axios.get(`http://localhost:3003/posts`).then((res)=>{
      filtereddata(res.data)
    })
  };
  
  
  const check=()=>{
    
  }

  let dispatch = useDispatch();
  const getdata = () => {
    axios.get("http://localhost:3003/posts").then((res) => {
      res.data.filter((ele) => {
        if (ele.email === localemail) {
          setUser(ele);
          setTodos(ele.todos);
          dispatch(Adddb(ele.todos));
        } else {
          testemail = true;
        }
      });
    });
  };
  if (testemail) {
    alert("account not exist");
  }
  const handleupdate = (e, t, d,i) => {
    console.log(e,t,d,i)
    setDate(d);
    setTask(t);
    setMyid(i);
  };

  const submit = () => {
    todos.push({ task: task, date: date });
    axios.patch(`http://localhost:3003/posts/${user.id}`, user);
    getdata();
  };

  // console.log(user.todos.id)
  const edit = () => {
    console.log(task)
    console.log('====================================');
    user.todos[myid].task=task
    user.todos[myid].date=date
    axios.patch(`http://localhost:3003/posts/${user.id}`,user)
    .then(getdata())
  };

  const handledel = (id) => {
    user.todos.map((e, i) => {
      if (i == id) {
        todos.splice(i, 1);
        axios.patch(`http://localhost:3003/posts/${user.id}`, user);
        console.log(i)
        getdata()
      }
    });

    getdata();
  };
 console.log(myid)
  const handleform = (e) => {
    e.preventDefault();
    if (myid === undefined || myid === '') {
      submit();
    } else {
      edit();
      // submit();
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
    handlemail()
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
        data.map((e, i) => (
          <Task
            {...e}
            update={handleupdate}
            handledel={handledel}
            todokey={i}
            key={i}
          />
        ))}
    </div>
  );
}

export default Main;
