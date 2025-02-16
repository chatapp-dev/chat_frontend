import { ForgotPasswordForm } from "./ForgotPasswordForm";
import Secure from "../Secure/Secure";
// import Refresh from "../Refresh/Refresh";
import styles from "../Register/Register.module.scss";

const ForgotPassword = () => {
  const isLogin = false;
  return isLogin ? (
    <Secure />
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
