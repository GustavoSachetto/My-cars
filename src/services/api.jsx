import axios from "axios"

export default axios.create({
  baseURL: "http://localhost/api-carros/api/v1",
  timeout: 5000
})