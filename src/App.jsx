import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Template from "./templates_pages/Template";
import { setIsMobileOrTablet } from "./store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive"; // разрешение экрана
import HomePage from "./pages/HomePage";
import ModalManager from "./components/modal/ModalManager";

const App = () => {
  const dispatch = useDispatch();
  const { modalState } = useSelector((state) => state.app);
  const [modalOpen, setModal] = useState(null);

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    dispatch(setIsMobileOrTablet(isMobileOrTablet));
  }, [dispatch, isMobileOrTablet]);

  useEffect(() => {
    const modalName = Object.keys(modalState).filter((item) => {
      return modalState[`${item}`].step !== 0;
    });

    if (modalName.length !== 0) {
      const name = modalName[0];
      const numStep = modalState[`${modalName}`].step;

      setModal(`${name}-${numStep}`);
    } else {
      setModal(null);
    }
  }, [modalState]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/private" element={<Private />} /> */}
        </Route>
      </Routes>
      <ModalManager modal={modalOpen} />
      <div id="modal-root"></div>
    </>
  );
};

export default App;
