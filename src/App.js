import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import ProfileContainer  from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import style from './App.css';
import Login from "./components/Login/login";
const App = (props) => {
  // debugger
  return (
    
  <div className={style.app}>
     
      <HeaderContainer />
      <Navbar />
      <Routes>
        <Route
          path="/dialogs"
          element={
            <DialogsContainer 
              state={props.state.messagesPage}
              store={props.store}/>}/>
        <Route
          path="/profile/:userId?"
          element={
            <ProfileContainer  store={props.store}
              profilePage={props.state.profilePage}/>}/>
              <Route
          path="/users"
          element={
            <UsersContainer store={props.store}
              profilePage={props.state.profilePage}/>}/>
              <Route
          path="/login"
          element={
            <Login
              state={props.state.messagesPage}
              store={props.store}/>}/>
      </Routes>
    </div>)
};

export default App;
