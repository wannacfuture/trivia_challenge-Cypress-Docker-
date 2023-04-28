import axios from "axios";

const baseURL = " https://opentdb.com/api.php";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`,
});

export default instance;
