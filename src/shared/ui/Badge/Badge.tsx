import { MouseEventHandler, ReactNode } from "react";
import CrossSvg from "../../assets/icons/cross.svg?react";
import { Button } from "../Button/Button";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  withButton?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Badge = (props: BadgeProps) => {
  const { children, withButton, onClick = undefined, color } = props;
  return (
    <Button
      size="xs"
      onClick={onClick}
      className={clsx(
        `px-2.5 py-0.5 border-none flex items-center justify-center rounded-xl text-gray-950`,
        `bg-purple-300`
      )}
      addonRight={withButton ? <CrossSvg height={10} width={10} /> : null}
    >
      {children}
    </Button>
  );
};
