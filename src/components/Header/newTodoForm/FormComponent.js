import React from 'react'
import {Field, Formik,Form} from "formik"
import validations from './Validations';

function FormComponent() {
return(
    
    <Formik
    initialValues={{
      text: '',
      
    }}
    onSubmit={async (values,bag) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
   
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