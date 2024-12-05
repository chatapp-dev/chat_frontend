import logo from "@/assets/images/logo.png";
import { Routes } from "@/constants";
import { Link } from "react-router-dom";
import { RegisterForm } from "@/components/common/RegisterForm";
import styles from "../SignInPage/SignInPage.module.scss";

export const RegistrationPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Join the Motivation Movement</h1>
            <p>
              Start your journey toward achieving your goals with a community
              that supports and uplifts. Together, we thrive, grow, and succeed
            </p>
          </div>
          <RegisterForm />

          <div className={styles.noAccount}>
            <p>Is Already a Member of Our Motivation Realm?</p>
            <Link to={Routes.SIGN_IN}>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
