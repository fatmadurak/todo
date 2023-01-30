import { object, string } from 'yup';

const validations = object({
  text: string().required("text is a required field"),
  
});

export default validations
