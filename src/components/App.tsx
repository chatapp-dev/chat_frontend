import { AppRoutes } from "@/constants";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";

import {
  ForgotPasswordPage,
  LoginPage,
  RegistrationPage,
  ChatPage,
} from "@/pages";

import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.ROOT}
        element={<Link to={AppRoutes.SIGN_IN}>Welcome to Chat Mate</Link>}
      />
      <Route path={AppRoutes.CHAT_MAKE} element={<ChatPage />} />
      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.SIGN_UP} element={<RegistrationPage />} />
        <Route path={AppRoutes.SIGN_IN} element={<LoginPage />} />
        <Route
          path={AppRoutes.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
