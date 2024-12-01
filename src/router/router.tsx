import { Routes } from "@/constants";
import { AuthLayout } from "@/layouts";
import { SignUpPage, ForgotPassword } from "@/pages";
import { LoginPage } from "@/pages/LoginPage";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Link to={Routes.SIGN_UP}>Welcome to Chat Mate</Link>,
    index: true,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <LoginPage />,
        path: Routes.SIGN_IN,
      },
      {
        element: <SignUpPage />,
        path: Routes.SIGN_UP,
      },
      {
        element: <ForgotPassword />,
        path: Routes.FORGOT_PASSWORD,
      },
    ],
  },
]);
