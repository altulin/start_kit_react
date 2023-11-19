import axs from "../service/AXS";
import { postAuthorization } from "../service/path";

export const authAuthorization = (phoneNumber, password) => {
  return axs.post(
    postAuthorization,
    {
      phoneNumber,
      password,
    },
    {
      headers: {},
    }
  );
};
