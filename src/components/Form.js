import React from 'react';

const Form = ({input,setInput,todo,setTodo,setStatus})=>{

  const inputHandler = (e)=>{
    setInput(e.target.value);
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    setTodo([...todo,{text:input,completed:false,id:Math.random()*1000}]);
    setInput("");
  }

  const statusHandler = (e)=>{
    setStatus(e.target.value);
  }
  return(
    <form>
      <input value = {input} onChange={inputHandler} type ="text" className="todo-input"/>
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All Task</option>
          <option value="completed">Completed</option>
          <option value="Uncompleted">Yet to do</option>
        </select>
      </div>
    </form>
  )
}


export default Form;
