import { Outlet } from "react-router-dom";
import { Logo } from "@/components/common";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  //TODO: Check whether user is authenticated or not. If yes, redirect him to main page.
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Logo />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
