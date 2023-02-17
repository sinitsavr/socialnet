import React from "react";
import Profile from "./../Profile/Profile";
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus} from './../../redux/profileReducer'
import {useParams, useLocation, useNavigate} from "react-router-dom";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";

import {Navigate} from "react-router-dom";


class ProfileContainer extends React.Component {
   constructor(props) {
      super( props );
      this.state = {
         isShowMyProfile: true
      }
   }


   componentDidMount() {

      let userIdFromPath = +this.props.router.params.userId;
      let authorisedUserId = this.props.authorisedUserId;

      if (userIdFromPath) {
         //userId = 2;
         //userId = 23275;
         this.props.getUserProfile( userIdFromPath );
         this.props.getStatus( userIdFromPath );

      } else {

         if (this.props.isAuth) {
            this.props.getUserProfile( authorisedUserId );
            this.props.getStatus( authorisedUserId );
         }
      }
   }

   componentDidUpdate(prevProps, prevState, snapshot) {

      let userIdFromPath = +this.props.router.params.userId;
      let authorisedUserId = this.props.authorisedUserId;
      let isShowMyProfile = this.state.isShowMyProfile;

      if (isShowMyProfile) {

         if (userIdFromPath === authorisedUserId) {
            this.setState( {isShowMyProfile: false} )
         }

         if (!userIdFromPath && this.props.isAuth) {
            this.props.getUserProfile( authorisedUserId );
            this.props.getStatus( authorisedUserId );
            this.setState( {isShowMyProfile: false} )
         }
      }
   }

   render() {

      if (!this.props.isAuth && !this.props.router.params.userId) {
         return <Navigate to={'/login'} />
      }

      return (
         <div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
         </div>
      )
   }
}


// wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
function withRouter(Component) {

   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();

      return <Component
         {...props}
         router={{location, navigate, params}} />;
   }

   return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorisedUserId: state.auth.id,
   isAuth: state.auth.isAuth
})


const ProfileContainerCompose = compose(
   withRouter,
   connect( mapStateToProps, {getUserProfile, getStatus, updateStatus} )
)( ProfileContainer );

export default ProfileContainerCompose;

// class ProfileContainer extends React.Component {

//   componentDidMount() {
//      let userId = this.props.router.params.userId;
//      if (!userId) {
//         userId = this.props.authoraiedUserId;
//      }
//      this.props.getUserProfile(userId);
//      this.props.getStatus(userId)
//     }
//     render() {
//        if (!this.props.isAuth) {
//           return redirect('/login')
//        }
//        return (
//           <div>
//              <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
//           </div>
//        )
//     }
//  }
 
// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//      let location = useLocation();
//      let navigate = useNavigate();
//      let params = useParams();
//      return (
//         <Component
//            {...props}
//            router={{location, navigate, params}}
//         />
//      );
//   }
//   return ComponentWithRouterProp;
// }


// let mapStateToProps = (state) =>({
// profile: state.profilePage.profile,
// isAuth: state.auth.isAuth,
// status: state.profilePage.status,
// authoraiedUserId: state.auth.userId
// })
// const ProfileContainerCompose = compose(
//    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
//    withRouter,
//    //WithAuthRedirect
// )( ProfileContainer )

// export default ProfileContainerCompose
