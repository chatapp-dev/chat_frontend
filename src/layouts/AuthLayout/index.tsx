import { Outlet } from "react-router-dom";
import logo from "@/assets/images/logo.png";

import styles from "./AuthLayout.module.scss";

export const AuthLayout = () => {
  //TODO: Check whether user is authenticated or not. If yes, redirect him to main page.
  return (
    <div className={styles.wrapper}>
      {/* <div> */}
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
};
