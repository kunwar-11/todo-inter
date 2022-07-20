import React, { useState } from 'react';
import Todo from './Todo';
import axios from 'axios';
import './App.css';
//import {captalizingFunction} from "./util"

function App() {
  const [todos , setTodos] = useState([])
  const loadTodos = async () => {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
      if(data){
        setTodos(data)
      }
  }

  const removeCompleted = () => {
    setTodos(prev => prev.filter(each => !each.completed))
  }

  const reArrangeTodos = () => {
    const inComplete = todos.filter(each => !each.completed)
    const complete = todos.filter(each => each.completed)
    setTodos([...inComplete,...complete])
  }

  const capitalise = () => {
      const captialisedTodo = todos.map(each => {
        const captialString = each.title.toUpperCase()
        return {...each , title : captialString}
      })
      setTodos(captialisedTodo)
  }

  return (
    <div className="App">
      <button onClick={loadTodos}> Load Todos</button>
     {todos.length > 0 && <div>
      {
        todos.map(each => <Todo todo = {each} setTodos = {setTodos} todos = {todos} key = {each.id}/>)
      }
      </div>}
      <button onClick={removeCompleted}>Clear</button>
      <button onClick = {reArrangeTodos}>Re-Arrange</button>
      <button onClick={capitalise}>Capitalise</button>
    </div>
  );
}

export default App;
