import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import { redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  ));
  let messagesElements = state.messagesData.map((message) => {
    return <Message message={message.message} key={message.id}/>;
  });
  let newMessageElem = state.newMessageText;
 
  let addMessage = () =>{
    debugger;
    props.sendMessage()
  };

  let onMessageChange = (e) => {
    debugger;
    let text = e.target.value;
    props.upadateNewMessageBody(text);
  }
  if (!props.isAuth) return redirect('/login');

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
        </div>
      <div className={style.messages}>
        {messagesElements}
        </div>
        <div>
          <textarea placeholder="Enter your message"
          onChange={onMessageChange}
          value={newMessageElem}></textarea>
          <button onClick={addMessage}>AddMessage</button>
        </div>
    </div>
  );
};

export default Dialogs;
