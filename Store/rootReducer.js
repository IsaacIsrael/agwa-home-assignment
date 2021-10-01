import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import cartReducer from './Reducers/cart';
import itemIdReducer from './Reducers/itemId'
import authReducer  from './duckers/auth'
import userReducer  from './duckers/user'
import farmsReducer  from './duckers/farm'
import vegetableReducer  from './duckers/vegetable'



const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorage,
  // whitelist: ['user', 'farm'],
  whitelist: ['user'],
}


const rootReducer = combineReducers({
  cart: cartReducer,
  itemId: itemIdReducer,
  auth: authReducer,
  user: userReducer,
  farms: farmsReducer,
  vegetables: vegetableReducer,
})



const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;