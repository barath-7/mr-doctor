export default function phoneValidator(value) {
  var phoneFormat = /^\d{10}$/;
  if (value.match(phoneFormat)) {
    return true;
  } else {
    return false;
  }
}
