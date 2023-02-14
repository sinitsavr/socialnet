import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import { redirect } from "react-router-dom";
import AddMessageForm from "./AddMessageForm.js/AddMessageForm";

const Dialogs = (props) => {

let state = props.messagesPage;

let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>));

let messagesElements = state.messagesData.map((message) => {
    return <Message message={message.message} key={message.id}/>;});
 
let addNewMessage = (values) => {
  props.sendMessage(values.newMessageText)
}

  if (!props.isAuth) return redirect('/login');

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
        </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        </div>
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
  );
};

export default Dialogs;
