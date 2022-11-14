import axios from "axios";
import React from "react";
import Profile from "./../Profile/Profile";
import { connect } from "react-redux";
import {setUserProfile} from './../../redux/profileReducer'
import {useParams} from "react-router-dom";

const withRouter = WrappedComponent => (props) =>{
  const params = useParams();
  return ( <WrappedComponent {...props} params={params}/>)}
  
class ProfileContainer extends React.Component {
  debagger;
  componentDidMount(){
    let userId = this.props.match.params.userId || "2";
    let res = !userId ? '18301' : userId;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${res}`).then((response) => {
        this.props.setUsersProfile(response.data.items);});
  }
 render(){

  return (
    <Profile  posts={this.props.profilePage.posts} newPostText={this.props.profilePage.newPostText} dispatch={this.props.dispatch} store={this.props.store}  profile={this.props.profile}/>
  );
};
}

let WithUrlDataContainerComponent= withRouter(ProfileContainer);
let mapStateToProps = (state) =>({
profile: state.profilePage.profile
})
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);
