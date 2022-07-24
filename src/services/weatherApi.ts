import axios from "axios";
import env from '../../.env.json'
const BASE_URL = "http://api.weatherstack.com/current"

const weatherApi = async (cityCapital: string) => {
  return axios.get(BASE_URL, {params: {
    "access_key": env.ACCESS_KEY,
    "query": cityCapital
  }});
}

export default weatherApi;