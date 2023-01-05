import React, {useEffect} from "react";
import Profile from "./../Profile/Profile";
import { connect } from "react-redux";
import {getUserProfile} from './../../redux/profileReducer'
import {useParams, redirect} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/AuthRedirect";




const ProfileContainer = (props) => {
  useEffect(()=>{
    let userId = props.match.params.userId;
        let res = !userId ? '3' : userId
    props.getUserProfile(res);
  },)
  ;
 return <Profile  profile={props.profile}/>
  ;
}
const withRouter = WrappedComponent => (props) =>{
  const params = useParams();
  return ( <WrappedComponent {...props} params={params}/>)}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

  
let WithUrlDataContainerComponent= withRouter(AuthRedirectComponent);


let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
})
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);
