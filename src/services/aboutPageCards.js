import axios from "axios";
import commonFuncs from "../components/commonFuncs";
const baseUrl = "/api/about-page-cards";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(
    `${baseUrl}/${id}`,
    commonFuncs.getConfig()
  );
  return response.data;
};

const create = async (aboutPageCardObj) => {
  const response = await axios.post(
    baseUrl,
    aboutPageCardObj,
    commonFuncs.getConfig()
  );
  return response.data;
};

export default { getAll, create, remove };
