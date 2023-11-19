import { useEffect } from "react";
import { useMediaQuery } from "react-responsive"; // разрешение экрана
import { useDispatch } from "react-redux";
import { setIsMobileOrTablet } from "../store/appSlice";

const useSetIsMobileOrTablet = () => {
  const dispatch = useDispatch();
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    dispatch(setIsMobileOrTablet(isMobileOrTablet));
  }, [dispatch, isMobileOrTablet]);
};

export default useSetIsMobileOrTablet;
