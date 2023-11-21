import { useEffect } from "react";

const useLockBodyScroll = (flag) => {
  useEffect(() => {
    document.body.style.overflow = flag ? "hidden" : "visible";
  }, [flag]);
};

export default useLockBodyScroll;
