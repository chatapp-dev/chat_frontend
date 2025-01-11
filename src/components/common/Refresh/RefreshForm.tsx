import { Button, InputFormik } from "@/components/ui";
// import { useAppDispatch } from "@/hooks/useRedux";
// import { login } from "@/store/auth/auth.operations";
import { Formik, Form } from "formik";
import { refrechSchema } from "@/schemas/schemas";
import styles from "../Register/Register.module.scss";

export interface IRefreshData {
  email: string;
  password: string;
  confirmpassword: string;
}

export const RefreshForm = () => {
  // const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={refrechSchema}
      onSubmit={(values: IRefreshData) => {
        console.log("refrech", values);
        // dispatch(login(values));
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
          <span>Save New Password</span>
        </Button>
      </Form>
    </Formik>
  );
};
