import * as yup from "yup";

export const emailValidation = yup
  .string()
  .matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    "Enter a valid Email"
  )
  .required("Email is required");

export const passwordValidation = yup
  .string()
  .min(10, "Password must be at least 10 characters")
  .required("Password is required");

export const confirmPasswordValidation = (passwordField: string) =>
  yup
    .string()
    .oneOf([yup.ref(passwordField), undefined], "Passwords must match")
    .required("Confirm password is required");
