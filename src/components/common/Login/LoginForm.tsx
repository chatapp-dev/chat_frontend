import { Button, InputFormik, Icon } from "@/components/ui";
import { AppRoutes } from "@/constants";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useRedux";
import { login } from "@/store/auth/auth.operations";
import { Formik, Form } from "formik";
import { loginSchema } from "@/schemas/schemas";

import styles from "./Login.module.scss";

export interface ILoginData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values: ILoginData) => {
        console.log("login", values);
        dispatch(login(values));
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
        <Link className={styles.forgotPassword} to={AppRoutes.FORGOT_PASSWORD}>
          Forgot your password?
        </Link>

        <Button type="submit" className={styles.submitButton}>
          <span>Log In and Stay Motivated</span>

          <Icon name="arrow-top-right" width={24} height={24} />
        </Button>
      </Form>
    </Formik>
  );
};
