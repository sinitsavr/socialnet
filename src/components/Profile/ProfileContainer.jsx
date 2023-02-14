import React from "react";
import Profile from "./../Profile/Profile";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus} from './../../redux/profileReducer'
import {useParams, redirect, useLocation, useNavigate} from "react-router-dom";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";



class ProfileContainer extends React.Component {

  componentDidMount() {
     let userId = this.props.router.params.userId;
     if (!userId) {
        userId = 2;
     }
     this.props.getUserProfile(userId);
     this.props.getStatus(userId)
    }
    render() {
       if (!this.props.isAuth) {
          return redirect('/login')
       }
       return (
          <div>
             <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
          </div>
       )
    }
 }
 
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
     let location = useLocation();
     let navigate = useNavigate();
     let params = useParams();
     return (
        <Component
           {...props}
           router={{location, navigate, params}}
        />
     );
  }
  return ComponentWithRouterProp;
}


let mapStateToProps = (state) =>({
profile: state.profilePage.profile,
isAuth: state.auth.isAuth,
status: state.profilePage.status
})
const ProfileContainerCompose = compose(
   connect( mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
   withRouter,
   //WithAuthRedirect
)( ProfileContainer )

export default ProfileContainerCompose
