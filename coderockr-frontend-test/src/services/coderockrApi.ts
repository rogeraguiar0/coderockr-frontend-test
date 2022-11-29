import axios from "axios";

export const coderockrApi = axios.create({
  baseURL: "https://sample-posts.coderockr.com/api/",
  timeout: 10000,
});
