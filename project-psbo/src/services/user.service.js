import axios from "axios";
import authHeader from "./auth-header";

const getRooms = () => {
  const url = `${process.env.REACT_APP_BASEURL}/api/ruangan`;
  return axios.get(url, { headers: authHeader() });
};

const getRoomById = (id) => {
  const url = `${process.env.REACT_APP_BASEURL}/api/ruangan/${id}`;
  return axios.get(url, { headers: authHeader() });
};

const postOrder = (values) => {
  const url = `${process.env.REACT_APP_BASEURL}/api/pengajuan/store`;
  return axios.post(url, values, { headers: authHeader() });
};

export default {
  getRooms,
  getRoomById,
  postOrder,
};
