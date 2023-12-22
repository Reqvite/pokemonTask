import { MouseEventHandler, ReactNode } from "react";
import CrossSvg from "../../assets/icons/cross.svg?react";
import { Button } from "../Button/Button";

interface BadgeProps {
  children: ReactNode;
  withButton?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const сolors = ["blue", "green", "yellow", "red", "indigo", "pink"];
export const Badge = (props: BadgeProps) => {
  const { children, withButton, onClick = undefined } = props;
  const randomColor = сolors[Math.floor(Math.random() * сolors.length)];
  return (
    <Button
      size="xs"
      onClick={onClick}
      className={`px-2.5 py-0.5 border-none flex items-center justify-center rounded-xl bg-${randomColor}-200 text-gray-950`}
      addonRight={withButton ? <CrossSvg height={18} width={18} /> : null}
    >
      {children}
    </Button>
  );
};
