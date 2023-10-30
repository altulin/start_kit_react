import axs from "../service/AXS";
import { postPasswordRecovery } from "../service/path";

export const recPasswordRecovery = (phoneNumber) => {
  return axs.post(
    postPasswordRecovery,
    {
      phoneNumber,
    },
    {
      headers: {},
    }
  );
};
