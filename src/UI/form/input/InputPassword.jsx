import clsx from "clsx";
import React, { useState } from "react";
import { ReactComponent as IconEye } from "../../../images/svg/eye.svg";
import { ReactComponent as IconEyeOff } from "../../../images/svg/eye-off.svg";

const InputPassword = ({ formik, placeholder, name, label }) => {
  const [isTypeText, setType] = useState(false);

  return (
    <div className="form__field  input-block">
      <label className="input-block__label">
        <span className="input-block__name">{label}</span>
        <input
          type={isTypeText ? "text" : "password"}
          className={clsx(
            "input-block__input",
            "input-block__input--eye",
            formik.errors[`${name}`] && "input-block__input--error"
          )}
          placeholder={placeholder}
          name={name}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button
          type="button"
          className="input-block__eye"
          onClick={() => setType(!isTypeText)}
        >
          {!isTypeText && <IconEye />}
          {isTypeText && <IconEyeOff />}
        </button>
      </label>
      {formik.errors[`${name}`] ? (
        <p className="input-block__error">{formik.errors[`${name}`]}</p>
      ) : null}
    </div>
  );
};

export default InputPassword;

// password: yup
//   .string()
//   .required(required)
//   .min(8, passwordMin)
//   .max(14, passwordMax);

// confirm_password: yup
//   .string()
//   .required(required)
//   .oneOf([yup.ref("password"), null], confrmPasswordMatch);
