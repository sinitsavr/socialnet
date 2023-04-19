import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader";
import React, { Suspense } from "react";
import {initializeApp} from "./redux/app-reducer";

const DialogsContainer = React.lazy( () => import("./components/Dialogs/DialogsContainer") );
const ProfileContainer = React.lazy( () => import("./components/Profile/ProfileContainer") );

class App extends React.Component  {
   componentDidMount () {
      this.props.initializeApp()
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
   }
   catchAllUnhandledErrors = (PromiseRejectionEvent) => {
      console.log('some error');
      console.log(PromiseRejectionEvent)
   }
   componentWillUnmount(){
      window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
   }
   render(){
      if (!this.props.initialized){
         return <Preloader/>
   }
  return (
     <HashRouter>
        <div className="app-wrapper">
           <HeaderContainer />
           <Navbar />
           <div className="app-wrapper-content">
           <Suspense fallback={<Preloader />}>
              <Routes>
                 <Route
                    path='/profile/:userId'
                    element={
                       <ProfileContainer />} />
                 <Route
                    path='/profile/*'
                    element={
                       <ProfileContainer />} />
                 <Route
                    path='/dialogs/*'
                    element={
                       <DialogsContainer />}
                 />
                 <Route
                    path='/users'
                    element={
                       <UsersContainer />}
                 />
                 <Route
                    path='/login'
                    element={
                       <Login />}
                 />
                  <Route
                           path='*'
                           element={<NotFound />} />
              </Routes>
              </Suspense>
           </div>

        </div>
     </HashRouter>
  );
}
}
let NotFound = () => {
   return (
      <div className={'notFoundBlock'}>
         <div> ...Page 404</div>
         <div>< br /></div>
         <div>
            <NavLink to='/'>
               Go to main page
            </NavLink>
         </div>
      </div>
   )
}
let mapStateToProps = (state) => ({
   initialized: state.app.initialized
})
export default connect (mapStateToProps, {initializeApp})( App) ;