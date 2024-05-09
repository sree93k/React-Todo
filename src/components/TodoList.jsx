import TodoItem from "./TodoItem"
import style from './todolist.module.css'
export default function TodoList({todos,setTodos})
{
    const sortedTodo=todos.sort((a,b)=>Number(a.done)-Number(b.done))
    return(

        <div className={style.list}>
              {todos.map((item)=>(
            <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
       ))}
        </div>
    )
}