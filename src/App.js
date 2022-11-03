import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import style from './App.css';
const App = (props) => {
  return (
  <div className={style.app}>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/dialogs"
          element={
            <DialogsContainer 
              state={props.state.messagesPage}
              store={props.store}/>}/>
        <Route
          path="/profile"
          element={
            <Profile store={props.store}
              profilePage={props.state.profilePage}/>}/>
              <Route
          path="/users"
          element={
            <UsersContainer store={props.store}
              profilePage={props.state.profilePage}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
