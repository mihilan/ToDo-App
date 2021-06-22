
import React,{useState,useEffect} from 'react';
import Form from './components/Form'
import Todo from './components/Todo'
//import List from './components/List'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [todo,setTodo] = useState([]);
  const [status,setStatus] = useState("All Task");
  const [filtered,setFiltered] = useState([]);

  useEffect(()=>{
    getLocal();
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocal();
  },[todo,status])

  const filterHandler = ()=>{
    switch (status){
      case "completed":
        setFiltered(todo.filter((todo)=>todo.completed === true));
        break;
      case "Uncompleted":
        setFiltered(todo.filter((todo)=>todo.completed === false));
        break;
      default:
        setFiltered(todo);
        break;
    }
  }

  const saveLocal = ()=>{
      localStorage.setItem("todo",JSON.stringify(todo));
  };

  const getLocal = ()=>{
    if(localStorage.getItem("todo")===null){
      localStorage.setItem("todo",JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todo"))
      setTodo(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Make Your Todo List</h1>
      </header>
      <Form input = {input} todo ={todo} setTodo={setTodo}
      setInput={setInput} setStatus={setStatus}  />
      <Todo todo={todo} setTodo={setTodo} filtered={filtered}/>
    </div>
  );
}

export default App;
