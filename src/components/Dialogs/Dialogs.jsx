import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Navigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ErrorMessageWrapper} from "../../utils/validators";
import * as Yup from "yup";

const Dialogs = (props) => {

let state = props.messagesPage;

let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id}/>));

let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id}/>;
 
});

   if (!props.isAuth) return <Navigate to={'/login'}/>

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        
        <AddMessageForm sendMessage={props.sendMessage}/>{dialogsElements}
        </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        </div></div>
  );
}
const AddMessageForm = (props) => {

  const validationSchema = Yup.object().shape( {

     newMessageBody: Yup.string()
        .min( 2, "Must be longer than 2 characters !" )
        .max( 30, "Must be shorter than 30 characters !" )
        .required( "Required !" )
  } );

  const addNewMessage = (values) => {

     props.sendMessage( values );

  }

  return (
     <Formik
        initialValues={{
           newMessageBody: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
           addNewMessage( values.newMessageBody );
           resetForm( {values: ''} );
        }}
     >
        {() => (
           <Form>
              <div>
                 <Field
                    name={'newMessageBody'}
                    as={'textarea'}
                    placeholder={'enter text 2'}
                 />
              </div>
              <ErrorMessage name="newMessageBody">
                 {ErrorMessageWrapper}
              </ErrorMessage>

              <button type={'submit'}>Send</button>
           </Form>
        )}
     </Formik>
  )
}

export default Dialogs;
