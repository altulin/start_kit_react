import style from "./Modal.module.scss";
import clsx from "clsx";
import ModalPortal from "../ModalPortal";
// import { ReactComponent as Icon } from "../../../images/svg/close.svg";
import { useDispatch } from "react-redux";
import { clearAllStep } from "../../../store/appSlice";
import useLockBodyScroll from "../../../hooks/lockBodyScroll";

const Modal = ({ children, open = false }) => {
  const dispatch = useDispatch();

  useLockBodyScroll(open);

  // const {
  //   error: { isError },
  // } = useSelector((state) => state.app);

  return (
    <ModalPortal open={open}>
      <div>
        <div className={clsx(style.modal__inner)}>
          <button
            className={clsx(style.modal__close)}
            onClick={() => dispatch(clearAllStep())}
          >
            {/* <Icon /> */}
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
export default Modal;
