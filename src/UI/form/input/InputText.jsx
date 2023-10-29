import clsx from "clsx";

const InputText = ({ formik, placeholder, name, label }) => {
  return (
    <div className="form__field input-block">
      <label className="input-block__label">
        <span className="input-block__name">{label}</span>
        <input
          type="text"
          className={clsx(
            "input-block__input",
            formik.errors[`${name}`] && "input-block__input--error"
          )}
          placeholder={placeholder}
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>
      {formik.errors[`${name}`] ? (
        <p className="input-block__error">{formik.errors[`${name}`]}</p>
      ) : null}
    </div>
  );
};
export default InputText;

// initialValues: {firstName: Cookies.get("firstName") ? Cookies.get("firstName") : "",}

// const validationSchema = yup.object().shape({
//   firstName: yup
//     .string()
//     .required(required)
//     .matches(/[^-]$/, valid)
//     .min(2, nameMin)
//     .max(50, nameMax),
// });
