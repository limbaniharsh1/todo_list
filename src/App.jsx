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
  let [myid, setMyid] = useState();

  let[newtask,setNewtask]=useState('')
  let[newdate,setNewdate]=useState('')

  let dispatch = useDispatch();
  const getdata = () => {
    axios
      .get("http://localhost:3003/posts")
      .then((res) => dispatch(Adddb(res.data)));
  };
  const handleupdate = (e, t, d) => {
    // console.log(e, t, d);
    setDate(d)
    setTask(t)
    setMyid(e)
    console.log(myid)
    // getdata()
  };

  const submit = () =>{
    // e.preventDefault()
    axios.post("http://localhost:3003/posts", {
        task: task,
        date: date,
      });
      alert('add task')
      getdata()
  }

  const edit = () =>{
    axios.patch(`http://localhost:3003/posts/${myid}`,{
        task:task,
        date:date
      })
      alert('update')
      getdata()
  }

  const handleform = (e) => {
    e.preventDefault();
    if(myid == '' || myid == null)
    {
      submit()
      // alert('submit')
    }
    else{
      edit()
      // alert('edit')
    }
    setDate('')
    setTask('')
    setMyid('')
    // getdata();
  };

  const data = useSelector((store) => store.data.reverse());

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
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        enter date :{" "}
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
      {data.map((e,i) => <Task {...e} update={handleupdate} key={i}/>
      )}
    </div>
  );
}

export default App;
