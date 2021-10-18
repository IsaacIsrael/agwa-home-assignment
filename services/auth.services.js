import axios from "axios";


const KEY = '?key=AIzaSyDLTrlLmj_dFKOPI74doQ2rzuWimkIwLcA';
const HOST = 'https://identitytoolkit.googleapis.com/v1/accounts:';

class AuthService {
  
  login({email, password}){
    const url = `${HOST}signInWithPassword${KEY}`;
    return axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    })
    .then(response => response.data)
    .catch(error => error.response.data);
  }

  signUp({email, password}){
    const url = `${HOST}signUp${KEY}`;
    return axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    })
    .then(response => response.data)
    .catch(error => error.response.data);
  }

}

const authService = new AuthService();
export default authService