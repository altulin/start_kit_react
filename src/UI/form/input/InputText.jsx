import ErrorText from "./ErrorText";
import inputClass from "./inputClass";

const InputText = ({ formik, placeholder, name, label, handleInput }) => {
  return (
    <div className="form__field input-block">
      <label className="input-block__label">
        <span className="input-block__name">{label}</span>
        <input
          type="text"
          className={inputClass(formik, name)}
          placeholder={placeholder}
          name={name}
          onInput={handleInput}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>

      <ErrorText formik={formik} name={name} />
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
