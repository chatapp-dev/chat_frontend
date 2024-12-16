import { Button, InputFormik } from "@/components/ui";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/auth/operationsAuth";
import { Formik, Form } from "formik";
import { secureSchema } from "../../../schemas/schemas";
// import { useForm } from "@/hooks";
import styles from "../Login/Login.module.scss";

interface ISecureData {
  code: string;
}

const SecureForm = () => {
  return (
    <Formik
      initialValues={{
        code: "",
      }}
      validationSchema={secureSchema}
      onSubmit={(values: ISecureData) => {
        console.log("hello", values);
        // dispatch(loginThunk(values));
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
          Verify and Continue to Motivation
        </Button>
      </Form>
    </Formik>
  );
};

export default SecureForm;