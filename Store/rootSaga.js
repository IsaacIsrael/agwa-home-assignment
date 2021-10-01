import { all,  takeLatest }  from 'redux-saga/effects' ;
import { Types as authTypes }  from './duckers/auth';
import { Types as farmTypes }  from './duckers/farm';
import { Types as vegetableTypes }  from './duckers/vegetable';
import { logIn, signUp }  from './duckers/auth/saga'; 
import { fetchFarmOrders }  from './duckers/farm/saga';    
import { fetchVegetables } from './duckers/vegetable/saga';

export default function* rootSaga(){
  return yield all([
    takeLatest(authTypes.LOG_IN, logIn),
    takeLatest(authTypes.SIGN_UP, signUp),
    takeLatest(farmTypes.SET_SELECTED_FARM, fetchFarmOrders),
    takeLatest(vegetableTypes.SET_VEGETABLES, fetchVegetables),
  ])
}
