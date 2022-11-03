
import { addMessageActionCreator, updateNewMessageTextActionCreator } from 
"../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

  let mapStateToProps = (state) => {
    return{
    messagesData: state.messagesData,
    newMessageText: state.newMessageText
 } }
 let mapDispatchToProps = (dispatch) => {
  return{
  upadateNewMessageBody: ()=>{
    dispatch(addMessageActionCreator());
  },
  sendMessage: (text)=>{
    let action = updateNewMessageTextActionCreator(text);
    dispatch(action)
  }
 }}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


// let state = props.store.getState().messagesPage;
 

export default DialogsContainer;
