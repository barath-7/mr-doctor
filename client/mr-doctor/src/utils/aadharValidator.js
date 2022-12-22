export const aadhaarNumberValidator = (value) => {
  const aadharFormat = /^(\d{12})$/;
  if (value.match(aadharFormat)) {
    return true;
  } else {
    return false;
  }
};
