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
  disabled,
  readOnly,
  className,
}) => {
  return (
    <div
      className={clsx(
        "input-block",
        `input-block--${type}`,
        `${type}`,
        className
      )}
    >
      <label
        className={clsx(
          "input-block__label",
          `input-block__label--${type}`,
          `${type}__label`
        )}
      >
        <span
          className={clsx(
            "input-block__name",
            `input-block__name--${type}`,
            `${type}__name`
          )}
        >
          {label}
        </span>
        <input
          type={type}
          className={clsx(
            "input-block__input",
            `input-block__input--${type}`,
            `${type}__input`,
            formik.errors[`${name}`] && "input-block__input--error",
            formik.errors[`${name}`] && `${type}__input--error`
          )}
          placeholder={placeholder}
          name={name}
          onInput={handleInput}
          value={value ? value : formik.values[`${name}`]}
          onChange={onChange ? onChange : formik.handleChange}
          onBlur={formik.handleBlur}
          defaultChecked={defaultChecked}
          onKeyDown={handlKeyDown}
          disabled={disabled}
          readOnly={readOnly}
        />
        {children}
      </label>

      <ErrorText formik={formik} name={name} />
    </div>
  );
};
export default Input;
