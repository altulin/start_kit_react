import ReactDOM from "react-dom";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const ModalPortal = ({ children, open = false }) => {
  if (!open) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLockBodyScroll();

  return ReactDOM.createPortal(children, document.body);
};
export default ModalPortal;
