import { Button, InputFormik, Icon } from "@/components/ui";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/auth/operationsAuth";
import { Formik, Form } from "formik";
import { registerSchema } from "../../../schemas/schemas";
import styles from "./Register.module.scss";

export interface IRegisterData {
  userName: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values: IRegisterData) => {
        console.log("register", values);
        // dispatch(loginThunk(values));
      }}
    >
      <Form className={styles.formik}>
        <InputFormik
          name="userName"
          placeholder="Good Guy 1234"
          type="name"
          label="Username"
        />
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
          <span>Create My Account to Get Motivated</span>

          <Icon name="arrow-top-right" width={24} height={24} />
        </Button>
      </Form>
    </Formik>
  );
};
