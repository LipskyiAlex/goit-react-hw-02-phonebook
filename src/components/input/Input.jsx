

import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormWrapper,FormInput } from './imput.styled';


const schema = yup.object().shape({

  name: yup.string().min(3).max(32).required(),
  number: yup.number().required()
})




const Input = ({onSubmit}) => {

  const initialValues = {

    name: '',
    number: ''
 
 }
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <FormWrapper>
        <FormInput
          type="text"
          name="name"
          placeholder="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <ErrorMessage name="name" component='div' />
        <FormInput
          type="tel"
          name="number"
          placeholder="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
          <ErrorMessage name="number" component='div' />
        <button type="submit">Add to contacts</button>
      </FormWrapper>
    </Formik>
  );
};

export default Input;

