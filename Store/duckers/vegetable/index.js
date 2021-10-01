import { createActions, createReducer } from 'reduxsauce'

// Create action Types and Creators
export const { Types, Creators} = createActions({
  setVegetables: null,
  setVegetablesSuccess: ['vegetables'],
});

// Create Reducers handlers
const INITIAL_STATE = {}

const setVegetables = (state = INITIAL_STATE, { vegetables }) => vegetables

export default createReducer(INITIAL_STATE, {
  [Types.SET_VEGETABLES_SUCCESS] : setVegetables 
});
