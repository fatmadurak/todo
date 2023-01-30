import React from 'react'
import { UseTodoContext } from '../../../Context/TodoContext'

function ListItem({todo}) {

   const {toggleTodo,removeTodo}=UseTodoContext(); 

const onChange=(id)=>{

    toggleTodo(id)



}


const onDestroy=(id)=>{

removeTodo(id)


}
  return (
    <li key={todo.id} className={todo.completed?"completed" : ""}>
    <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed}  onChange={()=>onChange(todo.id)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
    </div>
</li>

  )
}

export default ListItem