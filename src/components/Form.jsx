import { useState } from "react"
import style from './form.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form({todos,setTodos})
{
    const [todo,setTodo]=useState({name:"",done:false})
    const [valid,setValid]=useState("")
    function submitHandle(e)
    {
        
        e.preventDefault()
        const validate1=todos.some((item)=>item.name===todo.name)
        const validate2=todo.name===""
        
     
        console.log("todos coming",todos);
        console.log(todo.name);
        console.log("validate2"+validate2);
        if(!validate1 && !validate2)
        {
          
            setTodos([...todos,todo])
            setTodo({name:"",done:false})
            setValid("")
            toast.success("Success Notification !")
        }
        else
        {
            const validError=validate1?"Already Exists":"Empty Input Not Allowed "
            setValid(validError)
        }
        
      
    }
    return(
        <form className={style.todoform} onSubmit={submitHandle}>
            <span className={style.validation}>{valid}</span>
        <div className={style.inputContainer}>
            
        <input className={style.modernInput} onChange={(e)=>setTodo({name:e.target.value,done:false}) && setValid("")} type="text" value={todo.name} placeholder="Enter Todo Item"/>
    
        <button className={style.modernButton} type="submit">Add</button>
        <ToastContainer />
        </div>
    </form>
    )
}