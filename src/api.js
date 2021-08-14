import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6d77ceed0474b0378295a278b0a58a93",
    language: "en-US"
  }
});

export default api;
