import { AppRoutes } from "@/constants";
import { AuthLayout } from "@/layouts";
import { ForgotPasswordPage, LoginPage, RegistrationPage } from "@/pages";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.ROOT}
        element={<Link to={AppRoutes.SIGN_UP}>Welcome to Chat Mate</Link>}
      />
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
