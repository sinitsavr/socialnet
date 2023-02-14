import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators"
import { Textarea } from "../../common/FormsControl/FormControl"




const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message' name="newMessageBody"/>
        <div><button onClick={props.addNewMessage}>Send</button></div>
      </div>
      </form>
  )
}

export default reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)