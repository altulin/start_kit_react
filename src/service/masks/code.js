const getInputNumbersValue = (input) => {
  return input.value.replace(/\d/g, "");
};

export const onCodeInput = (e) => {
  const input = e.target;
  let inputNumbersValue = getInputNumbersValue(input);

  if (inputNumbersValue) {
    return (input.value = input.value.replace(/.$/, ""));
  }
};
