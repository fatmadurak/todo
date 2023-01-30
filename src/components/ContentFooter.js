import React from 'react'
import { UseTodoContext } from '../Context/TodoContext'

function ContentFooter() {

	const {todos,setTodos,filter,setFilter}=UseTodoContext();
	const clearCompleted=()=>{

 const cloneTodo=[...todos]
 const newTodos=cloneTodo.filter(todo=>!todo.completed)
 setTodos(newTodos)

	}
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			item{todos.length>1 && "s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={filter==="all"?"selected":""} onClick={()=>setFilter("all")}>All</a>
			</li>
			<li>
				<a href="#/" className={filter==="active"?"selected":""} onClick={()=>setFilter("active")}>Active</a>
			</li>
			<li>
				<a href="#/" className={filter==="completed"?"selected":""} onClick={()=>setFilter("completed")}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
  )
}

export default ContentFooter