import { all,  takeLatest }  from 'redux-saga/effects' ;
import { Types as userTypes }  from './duckers/user';
import { logIn, signUp }  from './duckers/user/saga';    

export default function* rootSaga(){
  return yield all([
    takeLatest(userTypes.LOG_IN, logIn),
    takeLatest(userTypes.SIGN_UP, signUp),
  ])
}
