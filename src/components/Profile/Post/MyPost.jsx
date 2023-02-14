import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControl/FormControl";
// import style from "./MyPost.module.css";
import Post from "./Post";

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
        <Field name='newPostText' component={Textarea} placeholder='post message' validate={[required, maxLength10 ]}/>
        <button>Add post</button>
      </form>
}

const MyPosts = (props) => {

  let postsElements = props.posts
  .map(post =>  <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

let AddNewPostFormRedux = reduxForm({form: "addnewpostform"})(AddNewPostForm)
  
  let onAddPost = (values) => {
  props.addPost(values.newPostText);

}
  return (
    <div className="style.postBlock">
      MyPosts
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className="style.posts">
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
