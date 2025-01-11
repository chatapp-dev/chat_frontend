import { Button, InputFormik, Icon } from "@/components/ui";
// import { useAppDispatch } from "@/hooks/useRedux";
// import { login } from "@/store/auth/auth.operations";
import { Formik, Form } from "formik";
import { forgotSchema } from "@/schemas/schemas";
import styles from "../Register/Register.module.scss";

export interface IForgotData {
  email: string;
}

export const ForgotPasswordForm = () => {
  // const dispatch = useAppDispatch();
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
