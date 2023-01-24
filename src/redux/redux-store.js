import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
// import sidebarReducer from './sideBarReducer';
import thunkMiddleWare from 'redux-thunk'



let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store55 = store;
export default store;