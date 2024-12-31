import { Button, InputFormik, Icon } from "@/components/ui";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/auth/operationsAuth";
import { Formik, Form } from "formik";
import { forgotSchema } from "@/schemas/schemas";
import styles from "../Register/Register.module.scss";

export interface IForgotData {
  email: string;
}

export const ForgotPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={forgotSchema}
      onSubmit={(values: IForgotData) => {
        console.log("forgot", values);
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

        <Button type="submit" className={styles.submitButton}>
          <span>Send Reset Link</span>

          <Icon name="forgot-password" width={24} height={24} />
        </Button>
      </Form>
    </Formik>
  );
};
