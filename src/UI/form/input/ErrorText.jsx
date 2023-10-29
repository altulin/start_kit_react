const ErrorText = ({ formik, name }) => {
  return (
    <>
      {formik.errors[`${name}`] ? (
        <p className="input-block__error">{formik.errors[`${name}`]}</p>
      ) : null}
    </>
  );
};
export default ErrorText;
