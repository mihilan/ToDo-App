import React from 'react';
import List from './List'
const Todo = ({todo,setTodo,filtered})=>{
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todos)=>(
          <List
          text={todos.text}
          key={todos.id}
          todos={todos}
          todo={todo}
          setTodo={setTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todo;
