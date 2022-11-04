import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer';


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "I like kiteboarding", likesCount: 7 },
        { id: 3, message: "I learning React", likesCount: 11 },
        { id: 4, message: "Hello world", likesCount: 8 },
        { id: 5, message: "Good evening", likesCount: 8 },
      ],
      newPostText: ["it"],
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Vadym" },
        { id: 2, name: "Julia" },
        { id: 3, name: "Ruslan" },
        { id: 4, name: "Evgen" },
        { id: 5, name: "Olga" },
        { id: 6, name: "Sveta" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Wathup" },
        { id: 4, message: "Wazzap" },
        { id: 5, message: "Hi" },
        { id: 6, message: "Hi" },
      ],
      newMessageText: ["itha"],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _сallSubscriber() {},
  addPost() {
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._сallSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._сallSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._сallSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._сallSubscriber(this._state);
  },
  subscribe(observer) {
    this._сallSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._сallSubscriber(this._state);
  },
  
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default store;
window.store = store;
