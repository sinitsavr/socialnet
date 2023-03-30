const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Vadym" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Ruslan" },
    ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Wathup" },
    { id: 4, message: "Wazzap" },
    { id: 5, message: "Hi" },
  ]};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = action.newMessageText;
      let nextIdMessages = state.messages.length + 1;
      let newMessage = {
        id: nextIdMessages + text,
        message: text,
      }
    return {
        ...state,
        messages: [...state.messages, newMessage]}
  default:
      return state;
  }};

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;

