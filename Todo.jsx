import React from 'react'

const Todo = ({todo , setTodos , todos}) => {
//console.log(todo)
    const removeTodo = (id) => {
        const removed = todos.filter(each => each.id !== id) 
        setTodos(removed)
    }

  return (
    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <h2>{todo.title}</h2>
        <button onClick={() => removeTodo(todo.id)}>X</button>
        <p>{todo.completed ? "Completed" : "inComplete"}</p>
    </div>
  )
}

export default Todo