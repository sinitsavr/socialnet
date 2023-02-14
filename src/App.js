import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import ProfileContainer  from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import style from './App.css';
import Login from "./components/Login/login";
const App = () => {
  return (
     <BrowserRouter>
        <div className={style.app}>
           <HeaderContainer />
           <Navbar />
           <div className='app-wrapper-content'>
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
              </Routes>
           </div>

        </div>
     </BrowserRouter>
  );
}

export default App;