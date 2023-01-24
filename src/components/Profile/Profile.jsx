import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./Post/MyPostContainer";
import kite from './../../assets/imeges/kite.png'
import ProfileInfo from "./ProfileInfo";
const Profile = (props) => {
  // console.log(props);
  return (
    <div className={style.appWrapper}>
      <div className={style.appWrapperContent}>
        <img 
          alt=""
          className={style.img}
          src={kite}/>
        <div>ava+dis</div>
      </div>
      <div className={style.posts}>
       <ProfileInfo profile={props.profile} />
      <MyPostsContainer/>
    </div></div>
  );
};

export default Profile;
