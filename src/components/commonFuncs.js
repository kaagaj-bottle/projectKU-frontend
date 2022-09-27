let token = null;
let config = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

const getConfig = () => {
  return config;
};

export default { setToken, getConfig };
