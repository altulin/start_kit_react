import axs from "../service/AXS";
import {
  postSendVerificationCode,
  postSendVerifiCode,
  postSaveProfile,
} from "../service/path";

export const regSendVerificationCode = (phoneNumber) => {
  return axs.post(
    postSendVerificationCode,
    {
      phoneNumber,
    },
    {
      headers: {},
    }
  );
};

export const regVerifyCode = (verificationToken, verificationCode) => {
  return axs.post(
    postSendVerifiCode,
    {
      verificationToken,
      verificationCode,
    },
    {
      headers: {},
    }
  );
};

export const regSaveProfile = (
  verificationToken,
  firstName,
  lastName,
  email,
  password,
  gender,
  birthDate
) => {
  return axs.post(
    postSaveProfile,
    {
      verificationToken,
      firstName,
      lastName,
      email,
      password,
      gender,
      birthDate,
    },
    {
      headers: {},
    }
  );
};
