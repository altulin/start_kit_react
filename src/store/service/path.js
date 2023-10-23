// Обратная связь
//  получение списа вопросов и ответов
export const getFaq = "/feedback/faq";
// Отправка фидбека
export const postSend = "/feedback/send";

// Для сервиса APMcheck
// Callback для принятия чеков
export const postApmCheck = "/quiz/apmcheck-callback";

// Викторина
// Разыграть приз
export const getDrawPrize = "/quiz/draw-prize";
// Есть ли попытки розыгрыша
export const getIsPossibleStart = "/quiz/is-possible-start";
// Список чеков пользователя
export const getReceipt = "/quiz/receipt";
// Список выигранных призов
export const getWinningPrizes = "/quiz/winning-prizes";

// Общее
// Получение ссылок на политику иправила
export const getSettings = "/site/settings";

//Авторизация
//Авторизация по номеру телефона и паролю
export const postAuthorization = "/users/authorization";

//Пользователь
//Получение профиля пользователя
export const getUserMe = "/users/me";
//Изменение профиля пользователя
export const putUserMe = "/users/me";
//Именение пароля
export const patchPasswordChange = "/users/password/change";
//Сброс пароля
export const postPasswordRecovery = "/users/password/recovery";

//Регистрация
//Отправка кода подтверждения
export const postSendVerificationCode =
  "/users/registration/step-1/send-verification-code";
//Подтверждение номера телефона
export const postSendVerifiCode = "/users/registration/step-2/verify-code";

//Сохранение данных пользователя
export const postSaveProfile = "/users/registration/step-3/save-profile";
