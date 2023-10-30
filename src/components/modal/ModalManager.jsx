import React, { useEffect } from "react";

import ModalAuth1 from "./auth/ModalAuth1";
// import ModalError from "./error/ModalError";

const ModalManager = ({ modal }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // const el = document.querySelector("#revizor");
    // if (el) {
    //   window.revizorWidget.init("#revizor", {
    //     apiKey: process.env.REACT_APP_VIDGET_KEY,
    //     userUuid: user.id,
    //     successCallback: function () {
    //       dispatch(stepTo({ type: "check", step: 2 }));
    //     },
    //     errorCallback: function () {
    //       dispatch(stepTo({ type: "check", step: 3 }));
    //     },
    //     addButtonLabel: "Добавить чек", // text for button 'add', type = string, defaultValue = 'Добавить чек'
    //     sendButtonLabel: "Отправить чек", // text for button 'send', type = string, defaultValue = 'Отправить чек'
    //     uploadButtonLabel: "Загрузить", // text for button 'upload', type = string, defaultValue = 'Загрузить чек'
    //     classForUploadButton: "", // className for buttons to add and upload checks, type = string
    //     classForUploadPreview: "", // className for block with preview uploaded check, type = string
    //     classForDeleteButton: "", // className for delete button, type = string
    //     classForSendButton: "", // className for button to send, type = string
    //   });
    // }
  });

  return (
    <>
      <ModalAuth1 open={modal === "auth-1"} />
    </>
  );
};
export default ModalManager;
