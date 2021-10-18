import { call , put , select} from 'redux-saga/effects'
import { Creators as vegetableCreator } from './index'	
import vegetableService from '../../../services/vegetable.services';


export function* fetchVegetables (){
  try{
    const data = yield call(vegetableService.fetchAll, null);
    
    yield put(vegetableCreator.setVegetablesSuccess(data)); 
  }
  catch(error){
    console.log('Error:', error);
  }
}