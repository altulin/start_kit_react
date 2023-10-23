const getErrText = (code) => {
  let errorText = "";
  switch (code) {
    case 401:
      errorText =
        "Извините, в данный момент мы испытываем временные технические проблемы с отправкой SMS-кода. Пожалуйста, попробуйте позже.";
      break;
    case 431:
      errorText = "код валидации введен неверно";
      break;
    default:
      errorText = "Ошибка соединения с сервером";
  }

  return errorText;
};

export default getErrText;
