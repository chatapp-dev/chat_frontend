import { useState } from "react";
import { Icon } from "@/components/common";
import { Field, ErrorMessage } from "formik";
import styles from "./Input.module.scss";

interface InputFormikProps {
  name: string;
  placeholder?: string; // Поле необязательное
  type?: string;
  label?: string;
}

export const InputFormik: React.FC<InputFormikProps> = ({
  name,
  placeholder,
  type,
  label,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <Field
        className={styles.input}
        id={name}
        name={name}
        placeholder={placeholder}
        type={isPasswordVisible ? "text" : type}
      />
      {type === "password" && (
        <button
          type="button"
          className={styles.eye}
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <Icon name="eye" width={24} height={24} />
          ) : (
            <Icon name="eye-off" width={24} height={24} />
          )}
        </button>
      )}
      <ErrorMessage name={name}>
        {(error) => <span className={styles.error}>{error}</span>}
      </ErrorMessage>
    </div>
  );
};
