import logo from "@/assets/images/logo.png";
import { ForgotPasswordForm } from "@/components/common/ForgotPasswordForm/ForgotPasswordForm";

import styles from "../SignInPage/SignInPage.module.scss";
import { RefreshPage } from "../RefreshPage/RefreshPage";
// import { SecurePage } from "../SecurePage";

export const ForgotPassword = () => {
  const isLogin = false;
  return isLogin ? (
    <RefreshPage />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Forgot Password? Let's Get You Back on Track!</h1>
            <p>
              No worries – even the strongest need a reset sometimes. Enter your
              email, and we'll help you get back to your goals
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};
