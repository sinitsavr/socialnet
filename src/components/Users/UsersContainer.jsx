import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,setCurrentPage,unfollow,toogleFollowingProgress, getUsers} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getsUserSelector, getTotalUsersCount } from "../../redux/users-selectors";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";



class UsersContainer extends Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props 
    this.props.getUsers(currentPage, pageSize);}

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize);
    
  };
  render() {
    return <>
      {this.props.isFetching ?  <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    
  }
}

let mapStateToProps = (state) => {
  return {
    users: getsUserSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state), 
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//   toggleIsFetching: (isFetching) => {
//     dispatch(toggleIsFetchingAC(isFetching))
//   }
// };
// }
export default compose( connect(mapStateToProps, { 
follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}),
//withAuthRedirect 
)(UsersContainer);
