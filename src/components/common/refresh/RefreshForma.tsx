import { Button, InputFormik } from "@/components/ui";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/auth/operationsAuth";
import { Formik, Form } from "formik";
import { refrechSchema } from "../../../schemas/schemas";

import styles from "../../../pages/SignInPage/SignInPage.module.scss";

interface Values {
  email: string;
  password: string;
  confirmpassword: string;
}

export const RefreshForma = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={refrechSchema}
      onSubmit={(values: Values) => {
        console.log("refrech", values);
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
        <InputFormik
          name="confirmpassword"
          placeholder="**********"
          type="password"
          label="Repeat password"
        />

        <Button type="submit" className={styles.submitButton}>
          Save New Password
        </Button>
      </Form>
    </Formik>
  );
};
