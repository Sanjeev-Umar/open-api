import axios from "axios";

export const getUsers = () => {
  return axios("https://jsonplaceholder.typicode.com/users");
};
