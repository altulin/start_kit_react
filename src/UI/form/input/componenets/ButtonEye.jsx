import React from "react";
import { ReactComponent as IconEye } from "../../../../images/svg/eye.svg";
import { ReactComponent as IconEyeOff } from "../../../../images/svg/eye-off.svg";

const ButtonEye = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      className="input-block__eye"
      onClick={() => setType(!isTypeText)}
    >
      {!isTypeText && <IconEye />}
      {isTypeText && <IconEyeOff />}
    </button>
  );
};
export default ButtonEye;
