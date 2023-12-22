import clsx from "clsx";
import { ReactNode } from "react";

interface LabelProps {
  label?: string;
  isOptional?: boolean;
  children: ReactNode;
}
export const Label = (props: LabelProps) => {
  const { children, label, isOptional } = props;
  return (
    <label>
      <div className={clsx("mb-1", isOptional && "flex")}>
        {label} {isOptional && <span className="ml-auto">Optional</span>}
      </div>
      {children}
    </label>
  );
};
