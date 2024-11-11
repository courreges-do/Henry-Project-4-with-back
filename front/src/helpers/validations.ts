import validator from "validator";

export const isValid = (validation: string, value: string) => {
  if (validation === "mail") {
    return validator.isEmail(value);
  }
  if (validation === "password") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 4, max: 10 })
    );
  }
  return false;
};
