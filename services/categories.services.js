import axios from "axios";

const HOST = `https://plantostore-33e3d-default-rtdb.europe-west1.firebasedatabase.app/users/`;

class CategoriesService {
  
  fetchAll(){
    const url = `${HOST}${userId}/${farmId}.json`;
    return axios.get(url)
    .then(response => response.data)
    .catch(error => error.response.data);
  }
}

const CategoriesService = new CategoriesService();
export default CategoriesService