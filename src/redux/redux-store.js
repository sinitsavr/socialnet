import {legacy_createStore, combineReducers} from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
// import sidebarReducer from './sideBarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = legacy_createStore(reducers);

export default store;
window.__store__ = store