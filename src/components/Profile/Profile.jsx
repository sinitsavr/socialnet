import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./Post/MyPostContainer";
import ProfileInfo from "./ProfileInfo";
class Profile extends React.Component {
  render(){
  // console.log(props);
  return (
    <div>
       <ProfileInfo {...this.props} />
      <MyPostsContainer/>
    </div>
  );
}};

export default Profile;
