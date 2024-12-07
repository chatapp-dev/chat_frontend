import * as yup from "yup";
import * as validation from "./validationSchemas";

export const registerSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),

  email: validation.emailValidation,

  password: validation.passwordValidation,

  confirmpassword: validation.confirmPasswordValidation("password"),
});

export const loginSchema = yup.object().shape({
  email: validation.emailValidation,

  password: validation.passwordValidation,
});

export const secureSchema = yup.object().shape({
  code: yup
    .string()
    .matches(/^[A-Z]{3}-\d{2}-[A-Z]{3}-\d{2}$/, "Verification code is valid")
    .required("Verification code is required"),
});

export const forgotSchema = yup.object().shape({
  email: validation.emailValidation,
});

export const refrechSchema = yup.object().shape({
  email: validation.emailValidation,

  password: validation.passwordValidation,

  confirmpassword: validation.confirmPasswordValidation("password"),
});
