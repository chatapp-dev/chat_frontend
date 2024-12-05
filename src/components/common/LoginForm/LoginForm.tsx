import { Button, InputFormik } from "@/components/ui";
import { Routes } from "@/constants";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/auth/operationsAuth";
import { Formik, Form } from "formik";
import { loginSchema } from "../../../schemas/schemas";
import { Icon } from "../Icon";
import styles from "../../../pages/SignInPage/SignInPage.module.scss";

interface Values {
  email: string;
  password: string;
}

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values: Values) => {
        console.log("login", values);
        // dispatch(loginThunk(values));
      }}
    >
      <Form className={styles.formik}>
        <InputFormik
          name="email"
          placeholder="tom_hiddleston@gmail.com"
          type="email"
          label="Email"
        />
        <InputFormik
          name="password"
          placeholder="**********"
          type="password"
          label="Password"
        />
        <Link className={styles.forgotPassword} to={Routes.FORGOT_PASSWORD}>
          Forgot your password?
        </Link>

        <Button className={styles.submitButton}>
          Log In and Stay Motivated
          <Icon name="arrow-top-right" width={24} height={24} />
        </Button>
      </Form>
    </Formik>
  );
};
