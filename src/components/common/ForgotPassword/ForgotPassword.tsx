import logo from "@/assets/images/logo.png";
import { ForgotPasswordForm } from "@/components/common/ForgotPassword";

// import { RefreshPage } from "../RefreshPage/RefreshPage";
// import { SecurePage } from "../SecurePage";
import Refresh from "../Refresh/Refresh";
import styles from "../Login/Login.module.scss";

export const ForgotPassword = () => {
  const isLogin = false;
  return isLogin ? (
    <Refresh />
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

export default ForgotPassword;
