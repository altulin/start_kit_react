import axs from "../service/AXS";
import { postSend, getFaq } from "../service/path";

export const feedbackFaq = (limit, offset) => {
  return axs.get(
    getFaq,
    { limit, offset },
    {
      headers: {},
    }
  );
};

export const feedbackSend = (email, name, text) => {
  return axs.post(
    postSend,
    {
      email,
      name,
      text,
    },
    {
      headers: {},
    }
  );
};
