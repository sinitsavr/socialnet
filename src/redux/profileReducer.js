import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE ="SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
let initialState = 
  {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 12 },
      { id: 2, message: "I like kiteboarding", likesCount: 7 },
      { id: 3, message: "I learning React", likesCount: 11 },
      { id: 4, message: "Hello world", likesCount: 8 },
      { id: 5, message: "Good evening", likesCount: 8 },
    ],
    profile: null,
    status: ""
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      state.newPostText = "";
      return stateCopy;
    }
    case SET_USER_PROFILE: {        
      return {...state, profile: action.profile}
    }
   case SET_STATUS: {
    return {...state, status: action.status}
   }
    default:
      return state;
}};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST, newPostText
  };
};

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile});

export const setStatus = (status)=>({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch)=> {
  usersAPI.getProfile(userId).then((response) => {
  dispatch(setUserProfile(response.data))})};

export const getStatus = (userId) => (dispatch)=> {
    profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data))})};

export const updateStatus = (status) => (dispatch)=> {
      profileAPI.updateStatus(status).then((response) => {
        if(response.data.resultCode===0 ){
      dispatch(setStatus(status))}})};
    

export default profileReducer;

