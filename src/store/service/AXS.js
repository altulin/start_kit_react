import axios from "axios";
// import { errorShow } from "../appSlice";

import { getErrText } from "./getErrText";

const axs = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
});

axs.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    getErrText(error);
  }
);

export default axs;
