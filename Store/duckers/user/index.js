import { createActions, createReducer } from 'reduxsauce'

// Create action Types and Creators

export const { Types, Creators} = createActions({
  setUser: ['user'],
  reset: null,
});

// Create Reducers handlers

const INITIAL_STATE = {
  userId: "",
  firebaseUserId: "",
}

const setUser = (state = INITIAL_STATE, { user }) =>({...user })

const reset = (state = INITIAL_STATE, action) => INITIAL_STATE


// Create reducers
export default createReducer(INITIAL_STATE, {
  [Types.SET_USER] : setUser,
  [Types.RESET] : reset,
});
