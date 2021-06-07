function validatePIN(pin) {
  return new RegExp("^(?=(?:.{4}|.{6})$)[0-9]*$").test(pin);
}

validatePIN(-1234);
