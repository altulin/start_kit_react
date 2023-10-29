import clsx from "clsx";

const inputClass = (formik, name) => {
  return clsx(
    "input-block__input",
    formik.errors[`${name}`] && "input-block__input--error"
  );
};

export default inputClass;
