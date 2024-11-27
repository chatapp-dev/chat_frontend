import logo from "@/assets/images/logo.png";
import { Icon } from "@/components/common";
import { Button, Input } from "@/components/ui";
import { Routes } from "@/constants";
import { useForm } from "@/hooks";
import { Link } from "react-router-dom";
import styles from "../SignInPage/SignInPage.module.scss";

type FormValues = {
  email: string;
  password: string;
  name: string;
};
//registration
export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = () => {
    //ожидает промис
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.header}>
            <h1>Join the Motivation Movement</h1>
            <p>
              Start your journey toward achieving your goals with a community
              that supports and uplifts. Together, we thrive, grow, and succeed
            </p>
          </div>
          <Input
            placeholder="Good Guy 1234"
            type="name"
            label="Username"
            isValid={!errors.name}
            {...register("name")}
          />
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

          <Button className={styles.submitButton}>
            Create My Account to Get Motivated
            <Icon name="arrow-top-right" width={24} height={24} />
          </Button>
        </form>

        <div className={styles.noAccount}>
          <p>Is Already a Member of Our Motivation Realm?</p>
          <Link to={Routes.SIGN_IN}>Log in</Link>
        </div>
      </div>
    </div>
  );
};
