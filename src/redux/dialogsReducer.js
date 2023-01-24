const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
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
  newMessageText: "let",
};
const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.text}
    
    case ADD_MESSAGE:
      let text = state.newMessageText; 
    return {
        ...state,
        newMessageText: "",
        messagesData:[...state.messagesData, {id:7, message: text}]
      };
  default:
      return state;
  }
};
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};
export default dialogsReducer;
