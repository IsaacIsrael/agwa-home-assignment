import { createActions, createReducer } from 'reduxsauce'

// Create action Types and Creators
export const { Types, Creators} = createActions({
  addItem: null,
  addItemSuccess: ['item'],
});

// Create Reducers handlers
const INITIAL_STATE = {
  items: {}
}

const nothing = (state = INITIAL_STATE, { vegetables }) => state

const addItem = (state = INITIAL_STATE, { vegetables }) => {

}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM] : nothing
  [Types.ADD_ITEM_SUCCESS] : addItem 
});
