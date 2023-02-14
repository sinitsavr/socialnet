import React from "react";
import style from './ErrorMessage.module.css';
export const required = value => {
  if(value) return undefined;
  return 'Field required'
}

export const maxLengthCreator= (maxLength) => (value) => {
  if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined
}



export const validateEmailField = values => {

   const errors = {};
   if (!values.email) {
      errors.email = 'Required 1';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;

}


export const ErrorMessageWrapper = (msg) => {

   return (
      <div >
         <span className={style.validationErrorMessage}>
            {msg}
         </span>
      </div>
   )
}

