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
      validator.isAlpha(value.replace(/\s/g, "")) &&
      validator.isLength(value, { min: 4, max: 25 })
    );
  }
  if (validation === "address") {
    return validator.isAlphanumeric(value.replace(/\s/g, ""));
  }
  if (validation === "phone") {
    return (
      validator.isNumeric(value) &&
      validator.isLength(value, { min: 8, max: 13 })
    );
  }
  return false;
};
