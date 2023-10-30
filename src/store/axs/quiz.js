import axs from "../service/AXS";
import {
  getDrawPrize,
  getIsPossibleStart,
  getReceipt,
  getWinningPrizes,
} from "../service/path";

export const quizGetDrawPrize = (jwt) => {
  return axs.get(
    getDrawPrize,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetIsPossibleStart = (jwt) => {
  return axs.get(
    getIsPossibleStart,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetReceipt = (jwt) => {
  return axs.get(
    getReceipt,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetWinningPrizes = (jwt) => {
  return axs.get(
    getWinningPrizes,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};
