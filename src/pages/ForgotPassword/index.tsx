import logo from "@/assets/images/logo.png";
import { Icon } from "@/components/common";
import { Button, Input } from "@/components/ui";
import { useForm } from "@/hooks";
import styles from "../SignInPage/SignInPage.module.scss";

type FormValues = {
  email: string;
};

export const ForgotPassword = () => {
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
            <h1>Forgot Password? Let's Get You Back on Track!</h1>
            <p>
              No worries – even the strongest need a reset sometimes. Enter your
              email, and we'll help you get back to your goals
            </p>
          </div>
          <Input
            placeholder="tom_hiddleston@gmail.com"
            type="email"
            label="Email"
            isValid={!errors.email}
            {...register("email")}
          />

          <Button className={styles.submitButton}>
            Send Reset Link
            <Icon name="forgot-password" width={24} height={24} />
          </Button>
        </form>
      </div>
    </div>
  );
};
