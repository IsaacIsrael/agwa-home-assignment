import { createActions, createReducer } from 'reduxsauce'

// Create action Types and Creators

export const { Types, Creators} = createActions({
  logIn: ['email' , 'password'],
  logInSuccess: ['info'],
  logInError: ['message'],
  signUp: ['email' , 'password' , 'confirmPassword'],
  signUpSuccess: ['info'],
  signUpError: ['message'],
  logOut: null,
  reset: null,
});

// Create Reducers handlers

const INITIAL_STATE = {
  fetching : false,
  info : {
    userId: "",
    firebaseUserId: "",
  },
  error : "",
}

const signUp = (state = INITIAL_STATE, { userId, firebaseUserId }) => ({
  userId,
  firebaseUserId,
})


const fetching = (state = INITIAL_STATE) => (
   {
    ...state,
    fetching: true,
  }
)

const addUserInfo = (state = INITIAL_STATE, { info }) => (
  {
   ...state,
   fetching: false,
   info,
 }
)

const addError = (state = INITIAL_STATE, { message }) => (
  {
   ...state,
   fetching: false,
   error: message,
 }
)

const reset = (state = INITIAL_STATE, action) => INITIAL_STATE


// Create reducers
export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP] : fetching,
  [Types.SIGN_UP_SUCCESS] : addUserInfo,
  [Types.SIGN_UP_ERROR] : addError,
  [Types.LOG_IN] : fetching,
  [Types.LOG_IN_SUCCESS] : addUserInfo,
  [Types.LOG_IN_ERROR] : addError,
  [Types.LOG_OUT] : reset,
  [Types.RESET] : reset,
});;
