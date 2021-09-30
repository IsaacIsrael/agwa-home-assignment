import { all,  takeLatest }  from 'redux-saga/effects' ;
import { Types as authTypes }  from './duckers/auth';
import { logIn, signUp }  from './duckers/auth/saga';    

export default function* rootSaga(){
  return yield all([
    takeLatest(authTypes.LOG_IN, logIn),
    takeLatest(authTypes.SIGN_UP, signUp),
  ])
}
