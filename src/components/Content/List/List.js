import React from 'react'
import { UseTodoContext } from '../../../Context/TodoContext'
import ListItem from './ListItem';

function List() {

	const{todos,setTodos}=UseTodoContext();
  return (
    <ul className="todo-list">
		{


       todos.map((todo)=>(

		<ListItem key={todo.id} todo={todo}/>
	   ))


		}	
	
	</ul>
  )
}

export default List