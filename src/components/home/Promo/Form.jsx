import { useFormik } from "formik";
import clsx from "clsx";
import * as yup from "yup";
import InputText from "../../../UI/form/input/InputText";
import { onNameInput } from "../../../service/masks/name";
import { required, valid, nameMin, nameMax } from "../../../UI/form/errText";

const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(required)
      .matches(/[^-]$/, valid)
      .min(2, nameMin)
      .max(50, nameMax),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={clsx("form")}>
        <div className="form__block">
          <InputText
            formik={formik}
            placeholder={"имя"}
            name={"name"}
            label={"имя"}
            handleInput={onNameInput}
          />
        </div>
        <button type="submit">отправить</button>
      </form>
    </div>
  );
};
export default Form;
// placeholder, name, label, handleInput
