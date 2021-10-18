import axios from "axios";

export const URL = "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json"

class VegetableService {
  
  fetchAll(){
    return axios.get(URL)
    .then(response => response.data)
    .catch(error => error.response.data);
  }
}

const vegetableService = new VegetableService();
export default vegetableService