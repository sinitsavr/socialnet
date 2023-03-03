import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
// import sidebarReducer from './sideBarReducer';
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  // sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store55 = store;
export default store;