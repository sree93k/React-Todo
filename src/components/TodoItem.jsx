import style from './todoitem.module.css'
import { useState } from 'react';

export default function TodoItem({item,todos,setTodos})
{
    const [editMode,setEditmode]=useState(false)
    const [editedText,setEditText]=useState(item.name)
   function handleDelete(item)
   {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1c4a15",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete"
      }).then((result) => {
        if (result.isConfirmed) {
            setTodos(todos.filter((todo)=>todo!==item))
            
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Deleted Successfully",
              showConfirmButton: false,
              timer: 1500
            });
        }
      });
    

   }
    
        
    

    function handleEdit()
    {
        setEditmode(true)
    }
    function saveEdit(item)
    {
        setTodos(todos.map(todo=>todo===item?{...todos,name:editedText}:todo))
       
        setEditmode(false)
    }

    function handleClick(name)
    {
        
        setTodos(todos.map((todo)=>name===todo.name?{...todo,done:!todo.done}:todo))
       
    }
    function handleChange(event) {
        setEditText(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSave();
        }
    }
    const completeStrike=item.done?style.completed:"";
    return( 
        <div className={style.item}>
            <div className={style.itemName}>

            {editMode?(
                <input
                className={style.editInput}
                type="text"
                value={editedText}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            ):(
                <span className={completeStrike} onClick={()=>handleClick(item.name)}>
                {item.name}
            </span>
            )}


                <span>
                    {editMode?(
                        <button  onClick={()=>saveEdit(item)} className={style.saveButton} ><i class="fa-solid fa-file-export"></i></button>
                    ):(
                        <button  onClick={()=>handleEdit()} className={style.editButton} ><i class="fa-solid fa-pen-to-square"></i></button>
                    )}
                <button  onClick={()=>handleDelete(item)} className={style.deleteButton} ><i class="fa-solid fa-trash"></i></button>
            </span>
            </div>
            
            <hr className={style.line}/>
        </div>
    )
}