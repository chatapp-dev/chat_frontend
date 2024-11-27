import { Routes } from "@/constants";
import { AuthLayout } from "@/layouts";
import { SignInPage, SignUpPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <></>,
    index: true,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <SignInPage />,
        path: Routes.SIGN_IN,
      },
      {
        element: <SignUpPage />,
        path: Routes.SIGN_UP,
      },
    ],
  },
]);
