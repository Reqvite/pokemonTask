import React, {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";
import { Label } from "../Label/Label";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly" | "size"
>;

type InputSize = "sm" | "base" | "lg";
export type InputVariant = "clear" | "primary";

export interface InputProps extends HTMLInputProps {
  error?: string;
  className?: string;
  isOptional?: boolean;
  value?: string | number;
  variant?: InputVariant;
  label?: string;
  fullWidth?: boolean;
  onChange?: (e: any) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    error,
    isOptional,
    className,
    value,
    onChange,
    type = "text",
    variant = "primary",
    placeholder,
    fullWidth,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = "base",
    name,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      //@ts-ignore
      ref?.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const withAddon = addonLeft || addonRight;
  const input = (
    <div
      className={clsx(
        withAddon && "relative flex gap-2",
        fullWidth && "w-full"
      )}
    >
      <div className="absolute left-2 top-1/2 transform -translate-x-0 -translate-y-1/2">
        {addonLeft}
      </div>
      <input
        className={clsx(
          className && `${className}`,
          error ? "border-red-500" : "border-gray-400",
          withAddon && "flex items-center gap-2",
          "rounded-md font-medium py-2  border-2 border-gray-400 hover:border-purple-700 transition-all",
          size === "sm" && "h-6 px-2  text-sm",
          size === "base" && "h-8 px-3  text-base",
          size === "lg" && "h-10 px-4  text-lg",
          fullWidth && "w-full",
          variant === "clear" && "border-none focus:outline-none",
          addonLeft && "pl-8",
          addonRight && "pr-8",
          readonly &&
            "disabled:cursor-not-allowed disabled:border-brand opacity-45"
        )}
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        name={name}
        {...otherProps}
      />
      <div className="absolute right-6 top-1/2 transform -translate-x-0 -translate-y-1/2">
        {addonRight}
      </div>
      <span className={clsx(error ? "text-red-500" : "text-transparent")}>
        {error ? error : "0"}
      </span>
    </div>
  );

  if (label) {
    return (
      <Label isOptional={isOptional} label={label}>
        {input}
      </Label>
    );
  }

  return input;
});
