import logo from "@/assets/images/logo.png";
import { Button, Input } from "@/components/ui";
import { useForm } from "@/hooks";

import styles from "../../../pages/SignInPage/SignInPage.module.scss";

type FormValues = {
  text: string;
};

export const Secure = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = () => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.header}>
            <h1>Secure Your Journey</h1>
            <p>
              To ensure your experience is safe and protected, please verify
              your identity. Your motivation deserves the best security
            </p>
          </div>
          <Input
            placeholder="XSD-45-TGI-34"
            type="text"
            label="Enter verification code"
            isValid={!errors.text}
            {...register("text")}
          />

          <Button className={styles.submitButton}>
            Verify and Continue to Motivation
          </Button>
        </form>
      </div>
    </div>
  );
};
