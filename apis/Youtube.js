import axios from "axios";

const KEY = "AIzaSyCx2WmYgEsrUwU-uGhT_Z3WS7x-qP2m0mw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "3",
    key: KEY
  }
});