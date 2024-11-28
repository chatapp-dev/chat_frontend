import logo from "@/assets/images/logo.png";
import { Button, Input } from "@/components/ui";
import { useForm } from "@/hooks";

import styles from "../../../pages/SignInPage/SignInPage.module.scss";

type FormValues = {
  email: string;
  password: string;
};

export const Refresh = () => {
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
            <h1>Reset. Refresh. Restart!</h1>
            <p>
              Create a new password to keep your motivation secure. Fresh starts
              are part of every journey – let’s get you moving forward again!
            </p>
          </div>
          <Input
            placeholder="tom_hiddleston@gmail.com"
            type="email"
            label="Email"
            isValid={!errors.email}
            {...register("email")}
          />
          <Input
            placeholder="**********"
            type="password"
            label="Password"
            isValid={!errors.password}
            {...register("password")}
          />
          <Input
            placeholder="**********"
            type="password"
            label="Repeat password"
            isValid={!errors.password}
            {...register("password")}
          />

          <Button className={styles.submitButton}>Save New Password</Button>
        </form>
      </div>
    </div>
  );
};
