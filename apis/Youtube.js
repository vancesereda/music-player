import axios from "axios";
import KEY from './key'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "10", //Include option in settings in the future: not really sure how to do this.
    key: KEY,
    type: 'video'
  }
});