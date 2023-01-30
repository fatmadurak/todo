import React from 'react'
import { UseTodoContext } from '../../../Context/TodoContext'
import ListItem from './ListItem';


let filtered=null;
function List() {

	const{todos,setTodos,filter}=UseTodoContext();

	filtered=todos;

	if (filter!=="all") {
		filtered=todos.filter((todo)=>filter=="active"?todo.completed===false && todo:todo.completed===true && todo)
	}

  return (
    <ul className="todo-list">
		{


       filtered.map((todo)=>(

		<ListItem key={todo.id} todo={todo}/>
	   ))


		}	
	
	</ul>
  )
}

export default List