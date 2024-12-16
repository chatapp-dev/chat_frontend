import logo from "@/assets/images/logo.png";
import { SecureForm } from "@/components/common/Secure";

import styles from "../Login/Login.module.scss";

const Secure = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
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
