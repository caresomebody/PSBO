import axios from "axios";
import authHeader from "./auth-header";

const getRooms = () => {
  const url = `${process.env.REACT_APP_BASEURL}/api/ruangan`;
  return axios.get(url, { headers: authHeader() });
};

export default {
  getRooms,
};
