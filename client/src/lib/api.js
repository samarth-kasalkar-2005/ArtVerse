import axios from "axios";

const API = axios.create({
  baseURL: "https://artverse-backend-cg83.onrender.com/api",
});

export const IMAGE_URL =
  "https://artverse-backend-cg83.onrender.com/uploads/";

export default API;