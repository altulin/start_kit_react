import { ReactComponent as CheckIcon } from "@/images/svg/eye.svg";

const CheckboxChildren = () => {
  return (
    <>
      <span className="checkbox__indicator">
        <CheckIcon />
      </span>
      <span className="checkbox__label">
        <span>Согласен(на)</span>
        &nbsp;
        <a className="link-doc" href="/" target="_blank" rel="noreferrer">
          с правилами акции
        </a>
      </span>
    </>
  );
};
export default CheckboxChildren;
