import { createActions, createReducer } from 'reduxsauce'

// Create action Types and Creators
export const { Types, Creators} = createActions({
  setSelectedFarm: ['farm'],
  addOrdersToSelectedFarm: ['orders'],
  addOrdersToSelectedFarmError: [null],
});

// Create Reducers handlers

const INITIAL_STATE = {
  devices : [
    {
      id: 'farmA',		
      name: 'Farm A',
      orders: [],
    },
    {
      id: 'farmB',
      name: 'Farm B',
      orders: [],
    },
  ],
  selectedFarm : undefined,
  fetching: false,
}

const setSelectedFarm = (state = INITIAL_STATE, { farm }) => (
  {
    ...state,
   selectedFarm: farm,
   fetching: true,
  }
)

const addOrdersToSelectedFarm = (state = INITIAL_STATE, { orders }) => {
  const { selectedFarm } = state 
  return {
  ...state,
   selectedFarm: {
     ...selectedFarm,
     orders: [...selectedFarm.orders, ...orders]
   },
   fetching: false,
  }
};

const setFetchingToFalse = (state = INITIAL_STATE) => {
  const { selectedFarm } = state 
  return {
  ...state,
   fetching: false,
  }
};



// Create reducers
export default createReducer(INITIAL_STATE, {
  [Types.SET_SELECTED_FARM] : setSelectedFarm,
  [Types.ADD_ORDERS_TO_SELECTED_FARM] : addOrdersToSelectedFarm,
  [Types.ADD_ORDERS_TO_SELECTED_FARM_ERROR] : setFetchingToFalse,
});
