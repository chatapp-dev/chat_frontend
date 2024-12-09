export type Icons =
  | "eye-off"
  | "eye"
  | "error"
  | "arrow-top-right"
  | "forgot-password";

export type IconProps = {
  name: Icons;
  className?: string;

  width?: number;
  height?: number;

  fill?: string;
  stroke?: string;
};
