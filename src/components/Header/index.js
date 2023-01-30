import React from 'react'
import FormComponent from './newTodoForm/FormComponent'

function Header() {
  return (
    <header className="header">
    <h1>todos</h1>
   <FormComponent/>
   </header>
  )
}

export default Header