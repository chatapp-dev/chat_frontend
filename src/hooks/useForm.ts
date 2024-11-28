import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
import { ZodError, ZodSchema } from "zod";

type FormErrors<T> = { [K in keyof T]?: string };

interface UseFormOptions<T> {
  defaultValues?: Partial<T>;
  validationSchema?: ZodSchema<T>;
  mode?: "onChange" | "onBlur" | "all";
}

interface FormState<T> {
  errors: FormErrors<T>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  isValid: boolean;
  isDirty: boolean;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  touchedFields: Partial<Record<keyof T, boolean>>;
}

export function useForm<T extends Record<string, unknown>>({
  defaultValues,
  validationSchema,
  mode = "onChange",
}: UseFormOptions<T> = {}) {
  const [formState, setFormState] = useState<FormState<T>>({
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    isValid: true,
    isDirty: false,
    dirtyFields: {},
    touchedFields: {},
  });

  const fieldsRef = useRef<
    Record<keyof T, HTMLInputElement | HTMLTextAreaElement | null>
  >({} as Record<keyof T, HTMLInputElement | HTMLTextAreaElement | null>);

  const getValues = (): T => {
    const values = {} as T;
    for (const name in fieldsRef.current) {
      const field = fieldsRef.current[name as keyof T];
      if (field) {
        values[name as keyof T] = field.value as T[keyof T];
      }
    }
    return values;
  };

  const getValue = <U extends keyof T>(name: U): T[U] | undefined => {
    const field = fieldsRef.current[name];
    if (field) {
      return field.value as T[U];
    }
    return undefined;
  };

  const validate = (): boolean => {
    if (!validationSchema) return true;

    const values = getValues();

    try {
      const result = validationSchema.safeParse(values);
      if (!result.success) {
        result.error.errors.forEach((err) => {
          setFormState((prevState) => ({
            ...prevState,
            errors: {
              ...prevState.errors,
              [err.path[0] as keyof T]: err.message,
            },
            isValid: false,
          }));
        });
        return false;
      }
      setFormState((prevState) => ({
        ...prevState,
        errors: {},
        isValid: true,
      }));
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: FormErrors<T> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof T;
          newErrors[path] = err.message;
        });
        setFormState((prevState) => ({
          ...prevState,
          errors: newErrors,
          isValid: false,
        }));
      }
      return false;
    }
  };
  const validateField = (name: keyof T) => {
    if (!validationSchema) return true;

    const field = fieldsRef.current[name];

    if (!field) return true;

    const value = field.value;

    try {
      validationSchema
        .refine((data) => ({ [name]: data[name] }), { message: "" })
        .parse({ [name]: value });
      setFormState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            [name]: undefined,
          },
          isValid: true,
        };
      });
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldError = error.errors.find((err) => err.path[0] === name);
        if (fieldError) {
          setFormState((prevState) => ({
            ...prevState,
            errors: {
              ...prevState.errors,
              [name]: fieldError.message,
            },
            isValid: false,
          }));
        } else {
          setFormState((prevState) => {
            return {
              ...prevState,
              errors: {
                ...prevState.errors,
                [name]: undefined,
              },
              isValid: true,
            };
          });
        }
      }
      return false;
    }
  };

  const handleSubmit =
    (onSubmit: (values: T) => void | Promise<void>) =>
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("first");

      if (validate()) {
        try {
          setFormState((prevState) => ({
            ...prevState,
            isSubmitting: true,
          }));
          await onSubmit(getValues());
          setFormState((prevState) => ({
            ...prevState,
            isSubmitted: true,
          }));
        } finally {
          setFormState((prevState) => ({
            ...prevState,
            isSubmitting: false,
          }));
        }
      }
    };

  const register = (name: keyof T) => ({
    name,
    ref: (el: HTMLInputElement | HTMLTextAreaElement | null) => {
      fieldsRef.current[name] = el;
    },
    defaultValue: defaultValues ? defaultValues[name] : undefined,
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      if (mode !== "onChange") {
        validateField(name);
        setFormState((prevState) => ({
          ...prevState,
          dirtyFields: {
            ...prevState.dirtyFields,
            [name]: defaultValues
              ? defaultValues[name] !== value
              : value !== "",
          },
          touchedFields: {
            ...prevState.touchedFields,
            [name]: true,
          },
          isDirty: Object.values(prevState.dirtyFields).some(Boolean),
        }));
      }
    },
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      fieldsRef.current[name] = e.target;
      if (mode !== "onBlur") {
        validateField(name);
        setFormState((prevState) => ({
          ...prevState,
          dirtyFields: {
            ...prevState.dirtyFields,
            [name]: defaultValues
              ? defaultValues[name] !== e.target.value
              : e.target.value !== "",
          },
          touchedFields: {
            ...prevState.touchedFields,
            [name]: true,
          },
          isDirty: Object.values(prevState.dirtyFields).some(Boolean),
        }));
      }
    },
  });

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      isDirty: Object.values(prevState.dirtyFields).some(Boolean),
    }));
  }, [formState.dirtyFields]);

  return {
    formState,
    handleSubmit,
    register,
    getValues,
    getValue,
  };
}
