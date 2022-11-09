const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE ="SET_USER_PROFILE";
let initialState = 
  {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 12 },
      { id: 2, message: "I like kiteboarding", likesCount: 7 },
      { id: 3, message: "I learning React", likesCount: 11 },
      { id: 4, message: "Hello world", likesCount: 8 },
      { id: 5, message: "Good evening", likesCount: 8 },
    ],
    newPostText: ["it"],
    profile: null,
  }
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      state.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
   return stateCopy; }
   case SET_USER_PROFILE: {
    return {...state, pfofile: action.profile}
   }

    default:
      return state;
}};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;

