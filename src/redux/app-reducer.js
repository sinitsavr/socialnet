import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCES';

let initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {

   switch (action.type) {

      case INITIALIZED_SUCCESS:

         return {
            ...state,
            initialized: true
         }

      default:
         return state;
   }
}


const InitializedSuccess = () => ({
   type: INITIALIZED_SUCCESS,
});


export const initializeApp = () => (dispatch) => {
   let promise = dispatch (getAuthUserData())
    Promise.all([promise])
    .then( ()=> {
      dispatch(InitializedSuccess());
    })
}

export default appReducer