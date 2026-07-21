import axios from "axios";

const API = axios.create({
  baseURL: "https://artverse-backend-k1e8.onrender.com/api",
});

export const IMAGE_URL =
  "https://artverse-backend-k1e8.onrender.com/uploads/";

export default API;