import { SecureForm } from "./SecureForm";
import styles from "../Register/Register.module.scss";

const Secure = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Secure Your Journey</h1>
            <p>
              To ensure your experience is safe and protected, please verify
              your identity. Your motivation deserves the best security
            </p>
          </div>
          <SecureForm />
        </div>
      </div>
    </div>
  );
};

export default Secure;
