import styled from "@emotion/styled";

import { Formik,Form,Field,ErrorMessage } from 'formik';


export const FormWrapper = styled(Form)`
width: 100%;

`

export const FormInput = styled(Field)`

width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;

  
`


export const Button = styled.button`

  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

`