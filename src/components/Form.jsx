import { useState } from "react"
import style from './form.module.css'
export default function Form({todos,setTodos})
{
    const [todo,setTodo]=useState({name:"",done:false})
    
    function submitHandle(e)
    {
        e.preventDefault()
        
        setTodos([...todos,todo])
        setTodo({name:"",done:false})
    }
    return(
        <form className={style.todoform} onSubmit={submitHandle}>
        <div className={style.inputContainer}>
        <input className={style.modernInput} onChange={(e)=>setTodo({name:e.target.value,done:false})} type="text" value={todo.name} placeholder="Enter Todo Item"/>
        <button className={style.modernButton} type="submit">Add</button>
        </div>
    </form>
    )
}