import { AppRoutes } from "@/constants";
import { Link } from "react-router-dom";
import { RegisterForm } from "@/components/common/Register";
import styles from "./Register.module.scss";

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div className={styles.form}> */}
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Join the Motivation Movement</h1>
            <p>
              Start your journey toward achieving your goals with a community
              that supports and uplifts. Together, we thrive, grow, and succeed
            </p>
          </div>
          <RegisterForm />
        </div>

        <div className={styles.noAccount}>
          <p>Is Already a Member of Our Motivation Realm?</p>
          <Link to={AppRoutes.SIGN_IN}>Log in</Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Register;
