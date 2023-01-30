import React from 'react'

function ListItem({todo}) {
  return (
    <li key={todo.id} className={todo.completed?"completed" : ""}>
    <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} />
        <label>{todo.text}</label>
        <button className="destroy"></button>
    </div>
</li>

  )
}

export default ListItem