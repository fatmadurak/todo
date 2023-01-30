import React from 'react'
import {Field, Formik,Form} from "formik"

function FormComponent() {
return(
    
    <Formik
    initialValues={{
      text: '',
      
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
    <Form >
      

    <Field className="new-todo" placeholder="What needs to be done?" id="text" name="text" autoFocus />
    

    </Form>
  </Formik>
)

}

export default FormComponent