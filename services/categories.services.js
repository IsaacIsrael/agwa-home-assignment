import axios from "axios";

const URL = "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json"

class CategoriesService {
  
  fetchAll(){
    return axios.get(URL)
    .then(response => response.data)
    .catch(error => error.response.data);
  }
}

const categoriesService = new CategoriesService();
export default categoriesService