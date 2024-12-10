import { AppRoutes } from "@/constants";
import { AuthLayout } from "@/layouts";
import { ForgotPassword } from "@/pages";
import { LoginPage } from "@/pages/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <Link to={AppRoutes.SIGN_UP}>Welcome to Chat Mate</Link>,
    index: true,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <LoginPage />,
        path: AppRoutes.SIGN_IN,
      },
      {
        element: <RegistrationPage />,
        path: AppRoutes.SIGN_UP,
      },
      {
        element: <ForgotPassword />,
        path: AppRoutes.FORGOT_PASSWORD,
      },
    ],
  },
]);
