
import { addMessageActionCreator } from 
"../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

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
    sendMessage: (newMessageText)=>{
    dispatch(addMessageActionCreator(newMessageText))
  }
}
}

const DialogsContainer = compose(connect(mapStateToProps,mapDispatchToProps),  
//WithAuthRedirect 
)(Dialogs);


 

export default DialogsContainer;
