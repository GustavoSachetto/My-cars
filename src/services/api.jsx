import axios from "axios"

export default axios.create({
  baseURL: "https://gustavosachetto.site/api-carros/api/v1",
  timeout: 10000,
});
