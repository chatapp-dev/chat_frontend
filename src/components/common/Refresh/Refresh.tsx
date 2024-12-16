import logo from "@/assets/images/logo.png";
import { RefreshForma } from "@/components/common/Refresh";
import styles from "../Login/Login.module.scss";

const Refresh = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Reset. Refresh. Restart!</h1>
            <p>
              Create a new password to keep your motivation secure. Fresh starts
              are part of every journey – let’s get you moving forward again!
            </p>
          </div>
          <RefreshForma />
        </div>
      </div>
    </div>
  );
};
export default Refresh;
