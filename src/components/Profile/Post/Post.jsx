import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={style.item}>
      <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Christian_Bale-7834.jpg'/>
      { props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
