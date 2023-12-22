import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "outline" | "primary" | "text";
export type ButtonSize = "xs" | "sm" | "base" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  withoutHover?: boolean;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    variant = "primary",
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
    withoutHover,
    size = "base",
    ...otherProps
  } = props;

  const withAddon = addonLeft || addonRight;
  return (
    <button
      type="button"
      className={clsx(
        withAddon && "flex gap-2",
        className && `${className}`,
        "h-fit w-fit border border-brand rounded-md font-medium transition-all",
        fullWidth && "w-full flex items-center justify-center",
        size === "xs" && "h-5 px-1 py-1 text-xs",
        size === "sm" && "h-6 px-2 py-2 text-sm",
        size === "base" && "h-8 px-3 py-2 text-base",
        size === "lg" && "h-10 px-4 py-2 text-lg",
        size === "xl" && "h-12 px-4 py-2 text-xl",
        variant === "outline" &&
          "border-purple-700 text-purple-700 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-100",
        variant === "primary" &&
          "bg-purple-700 text-white text hover:bg-purple-500",
        variant === "text" &&
          "border-none text-black hover:text-purple-400 hover:border-purple-400 hover:bg-purple-100 px-0 py-0",
        disabled &&
          "disabled:cursor-not-allowed disabled:border-brand opacity-45",
        withoutHover && "hover:bg-transparent"
      )}
      disabled={disabled}
      {...otherProps}
    >
      {addonLeft}
      {children}
      {addonRight}
    </button>
  );
};
