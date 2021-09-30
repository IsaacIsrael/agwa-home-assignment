import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist'

import cartReducer from './Reducers/cart';
import itemIdReducer from './Reducers/itemId'
import plantsReducer from './Reducers/plants';
import reduxMiddelware from './reduxMiddelware'
import categoriesReducer from './Reducers/categories';
import authReducer from './Reducers/auth'
import useReducer  from './duckers/user'
import { combineReducers } from 'redux';


const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorage,
}


const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  itemId: itemIdReducer,
  plants: plantsReducer,
  auth: authReducer,
  user: useReducer,
})



const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;