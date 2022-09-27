import axios from "axios";
const baseUrl = "http://localhost:3001/api/notices";

let token = null;
let config = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (noticeObject) => {
  const response = await axios.post(baseUrl, noticeObject, config);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default { getAll, create, getOne, remove, setToken };
