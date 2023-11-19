import { useState, useEffect } from "react";

const useGetCurrentModal = (modalState) => {
  const [modalOpen, setModal] = useState(null);

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

  return modalOpen;
};

export default useGetCurrentModal;
