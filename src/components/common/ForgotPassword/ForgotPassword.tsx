import { ForgotPasswordForm } from "@/components/common/ForgotPassword";

// import Secure from "../Secure/Secure";
import Refresh from "../Refresh/Refresh";
import styles from "../Login/Login.module.scss";

export const ForgotPassword = () => {
  const isLogin = true;
  return isLogin ? (
    <Refresh />
  ) : (
    <div className={styles.wrapper}>
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
