import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required("Email is required"),

  phone: yup.string().matches(/^\+38\d{10}$/, "Enter a valid Phone"),

  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required("Email is required"),

  password: yup
    .string()
    .min(10, "Password must be at least 10 characters")
    .required("Password is required"),
});

export const secureSchema = yup.object().shape({
  code: yup
    .string()
    .matches(/^[A-Z]{3}-\d{2}-[A-Z]{3}-\d{2}$/, "Verification code is valid")
    .required("Verification code is required"),
});

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required("Email is required"),
});

export const refrechSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    ),
  password: yup
    .string()
    .min(10, "Password must be at least 10 characters")
    .required("Password is required"),
});