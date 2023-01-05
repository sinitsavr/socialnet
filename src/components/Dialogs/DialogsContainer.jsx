
import { addMessageActionCreator, updateNewMessageTextActionCreator } from 
"../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { redirect} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/AuthRedirect";


  let mapStateToProps = (state) => {
    return{
    messagesData: state.messagesData,
    newMessageText: state.newMessageText,
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
 let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);


// let state = props.store.getState().messagesPage;
 

export default DialogsContainer;
