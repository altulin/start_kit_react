import ErrorText from "./componenets/ErrorText";
import clsx from "clsx";

const Input = ({
  type,
  formik,
  placeholder,
  name,
  label,
  handleInput,
  handlKeyDown,
  children,
  defaultChecked,
  value,
  onChange,
}) => {
  const getClass = () => {
    let clName;

    switch (type) {
      case "radio":
        clName = "radio";
        break;

      case "checkbox":
        clName = "checkbox";
        break;

      default:
        clName = "input-block";
    }

    return clName;
  };

  return (
    <div className={clsx("form__field", getClass())}>
      <label className={clsx(`${getClass()}__label`)}>
        <span className={clsx(`${getClass()}__name`)}>{label}</span>
        <input
          type={type}
          className={clsx(
            `${getClass()}__input`,
            formik.errors[`${name}`] && `${getClass()}__input--error`
          )}
          placeholder={placeholder}
          name={name}
          onInput={handleInput}
          value={value ? value : formik.values[`${name}`]}
          onChange={onChange ? onChange : formik.handleChange}
          onBlur={formik.handleBlur}
          defaultChecked={defaultChecked}
          onKeyDown={handlKeyDown}
        />
        {children}
      </label>

      <ErrorText formik={formik} name={name} />
    </div>
  );
};
export default Input;
