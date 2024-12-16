import appleLogo from "@/assets/images/apple-logo.png";
import googleLogo from "@/assets/images/google-logo.png";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui";
import { AppRoutes } from "@/constants";
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/common/Login";
import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        {/* <div className={styles.form}> */}
        <div className={styles.form}>
          <div className={styles.header}>
            <h1>Welcome Back to Your Motivational Space</h1>
            <p>
              Reconnect with a community that inspires. Share your goals,
              achievements, and keep the momentum going. Let's get back to
              making progress together
            </p>
          </div>
          <LoginForm />
        </div>

        <span className={styles.or}>or</span>
        <div className={styles.socialAuth}>
          <Button>
            <img src={googleLogo} alt="google logo" />
            Sign in with Google
          </Button>
          <Button>
            <img src={appleLogo} alt="apple logo" />
            Sign in with Apple
          </Button>
        </div>
        <div className={styles.noAccount}>
          <p>Not Member of Our Motivation Realm?</p>
          <Link to={AppRoutes.SIGN_UP}>Become a member</Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;