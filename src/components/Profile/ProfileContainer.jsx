import React, {useEffect} from "react";
import Profile from "./../Profile/Profile";
import { connect } from "react-redux";
import {getUserProfile} from './../../redux/profileReducer'
import {useParams, redirect} from "react-router-dom";




const ProfileContainer = (props) => {
  useEffect(()=>{
    let userId = props.match.params.userId
        let res = !userId ? '18301' : userId
    props.getUserProfile(res);
  },)
  if (!props.isAuth) return redirect('/login');
 return <Profile  profile={props.profile}/>
  ;
}
const withRouter = WrappedComponent => (props) =>{
  const params = useParams();
  return ( <WrappedComponent {...props} params={params}/>)}

let WithUrlDataContainerComponent= withRouter(ProfileContainer);


  

let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);
