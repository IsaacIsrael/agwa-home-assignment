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
  error : "",
}

const setFetchingTrue = (state = INITIAL_STATE ) => (
   {
    ...state,
    fetching: true,
  }
)

const setFetchingFalse = (state = INITIAL_STATE ) => (
  {
   ...state,
   fetching: false,
 }
)

const setError = (state = INITIAL_STATE, { message }) => (
  {
   ...state,
   fetching: false,
   error: message,
 }
)

const reset = (state = INITIAL_STATE, action) => INITIAL_STATE


// Create reducers
export default createReducer(INITIAL_STATE, {
  [Types.SIGN_UP] : setFetchingTrue,
  [Types.SIGN_UP_SUCCESS] : setFetchingFalse,
  [Types.SIGN_UP_ERROR] : setError,
  [Types.LOG_IN] : setFetchingTrue,
  [Types.LOG_IN_SUCCESS] : setFetchingFalse,
  [Types.LOG_IN_ERROR] : setError,
  [Types.LOG_OUT] : reset,
  [Types.RESET] : reset,
});;
