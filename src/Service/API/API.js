import axios from "axios";

export const API = {
  get(value) {
    return axios.get(value);
  }
}