
import { addMessageActionCreator, updateNewMessageTextActionCreator } from 
"../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

  let mapStateToProps = (state) => {
    return{
      messagesPage: state.messagesPage,
    dialogsData: state.dialogsData,
    messagesData: state.messagesData,
    newMessageText: state.newMessageText,
    isAuth: state.auth.isAuth
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


 

export default DialogsContainer;
