import { call , put , select} from 'redux-saga/effects'
import _map from 'lodash/map'
import orderService from '../../../services/orders.services';
import { Creators as farmCreator } from './index'	

export function* fetchFarmOrders ({ farm }){
  try{
    const { 
      firebaseUserId , 
      vegetables : { plants } 
    } = yield select((state)=> state);

    
    const { id:  farmId } = farm;

    const data = yield call(orderService.fetchByFarm,  { firebaseUserId, farmId });
    
    if(!data.pastOrders){
      return;
    }

    

    const orders = _map(data.pastOrders, (value, key)=>{
      const vegetable  = plants?.find( (item)=> item.id === key);
      return {
        ... value,
        ...vegetable,
      }
    })
   
    yield put(farmCreator.addOrdersToSelectedFarm(orders)); 
    
  }
  catch(error){
    yield put(farmCreator.addOrdersToSelectedFarmError()); 
  }
}