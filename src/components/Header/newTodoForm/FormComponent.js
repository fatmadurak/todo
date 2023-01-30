import React from 'react'
import {Field, Formik,Form} from "formik"
import validations from './Validations';
import { UseTodoContext } from '../../../Context/TodoContext';
function FormComponent() {

  const {addTodo}=UseTodoContext();

return(
    
    <Formik
    initialValues={{
      text: '',
      
    }}
    onSubmit={async (values,bag) => {
      await new Promise((r) => setTimeout(r, 100));
      

       addTodo(values.text);
   
      bag.resetForm()

    }}

    validationSchema={validations}
  >
    <Form >
      

    <Field className="new-todo" placeholder="What needs to be done?" id="text" name="text" autoFocus />
    

    </Form>
  </Formik>
)

}

export default FormComponent