import validator from "validator";

export const isValid = (validation: string, value: string) => {
  if (validation === "email") {
    return validator.isEmail(value);
  }
  if (validation === "password") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 4, max: 10 })
    );
  }
  if (validation === "name") {
    return (
      validator.isAlpha(value) && validator.isLength(value, { min: 4, max: 13 })
    );
  }
  if (validation === "address") {
    return validator.isAlphanumeric(value);
  }
  if (validation === "phone") {
    return (
      validator.isNumeric(value) &&
      validator.isLength(value, { min: 8, max: 13 })
    );
  }
  return false;
};
