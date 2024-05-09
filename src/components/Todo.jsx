import { useState } from "react"

import Form from "./Form"
import TodoList from "./TodoList"
import Footer from "./Footer"
export default function Todo()
{
    const [todos,setTodos]=useState([])
    const totalCount=todos.length
    const completedCount=todos.filter((todo)=>todo.done).length
    console.log(completedCount);
    return(
        <div>
           <Form todos={todos} setTodos={setTodos}/>
          <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedCount={completedCount} totalCount={totalCount}/>
        </div>
    )
}