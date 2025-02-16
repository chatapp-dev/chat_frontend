import { Button, InputFormik } from "@/components/ui";
// import { useAppDispatch } from "@/hooks/useRedux";
// import { register } from "@/store/auth/auth.operations";
import { Formik, Form } from "formik";
import { secureSchema } from "@/schemas/schemas";

import styles from "../Login/Login.module.scss";

export interface ISecureData {
  code: string;
}

export const SecureForm = () => {
  // const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        code: "",
      }}
      validationSchema={secureSchema}
      onSubmit={(values: ISecureData) => {
        console.log("hello", values);
        // dispatch(register(values));
      }}
    >
      <Form className={styles.formik}>
        <InputFormik
          name="code"
          placeholder="XSD-45-TGI-34"
          type="text"
          label="Enter verification code"
        />

        <Button type="submit" className={styles.submitButton}>
          <span>Verify and Continue to Motivation</span>
        </Button>
      </Form>
    </Formik>
  );
};
