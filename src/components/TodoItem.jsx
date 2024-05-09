import style from './todoitem.module.css'
export default function TodoItem({item,todos,setTodos})
{
    function handleDelete(item)
    {
        console.log("delete button clicked",item);
        setTodos(todos.filter((todo)=>todo!==item))
    }

    function handleClick(name)
    {
        
        setTodos(todos.map((todo)=>name===todo.name?{...todo,done:!todo.done}:todo))
       
    }
    const completeStrike=item.done?style.completed:"";
    return( 
        <div className={style.item}>
            <div className={style.itemName}>
                <span className={completeStrike} onClick={()=>handleClick(item.name)}>
                    {item.name}
                </span>
                <span>
                <button  onClick={()=>handleDelete(item)} className={style.deleteButton} >x</button>
            </span>
            </div>
            
            <hr className={style.line}/>
        </div>
    )
}