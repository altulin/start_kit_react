import ReactDOM from "react-dom";

const ModalPortal = ({ children, open = false }) => {
  if (!open) return null;
  const modalRootEl = document.getElementById("modal-root");

  if (!modalRootEl) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};
export default ModalPortal;
