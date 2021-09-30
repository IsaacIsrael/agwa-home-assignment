import { call , put } from 'redux-saga/effects'
import authService from '../../../services/auth.services';
import { isValidEmail } from '../../../utils/isValidEmail';
import { Creators as userCreator } from './index'	


// TODO:  Apply DRY a little more
export function* logIn ({ email, password }){
  try{
    if (!password || !email) {
      throw new Error('Please fill all fields'); 
    }  
      
    if (!isValidEmail(email)) {
      throw Error('Please enter a valid email'); 
    }

    const data = yield call(authService.login, { email, password});
		const { error , email: userId , localId :  userToken} =  data ;

    if (error) {
      throw Error('Please Sign Up'); 
		} 

    yield put(userCreator.logInSuccess({ userId,  firebaseUserId })); 
  }
  catch(error){
    yield put(userCreator.logInError(error.message)); 
  }
}

export function* signUp ({ email, password,confirmPassword }){
  try{
    if (!password || !confirmPassword || !email) {
      throw new Error('Please fill all fields'); 
		}
    if (!isValidEmail(email)) {
      throw Error('Please enter a valid email'); 
    }
		if (password != confirmPassword) {
      throw new Error('Passwords do not match'); 
		} 
		if (password && password.length < 6) {
      throw new Error('Password must be at least 6 characters'); 
		} 

    const data = yield call(authService.signUp, { email, password});
		const { error , email: userId , localId :  userToken} =  data ;
		
		if (error && error.message === "EMAIL_EXISTS") {
      throw Error('Email already exists'); 
		} 

    yield put(userCreator.signUpSuccess({ userId,  firebaseUserId })); 
  }
  catch(error){
    yield put(userCreator.signUpError(error.message)); 
  }
}