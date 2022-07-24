import axios from "axios";
const BASE_URL = "https://restcountries.com/v2/name"

const countryApi = async (countryName: string) => {
  const url = `${BASE_URL}/${countryName}?fullText=true` 
  return axios.get(url);
}

export default countryApi;