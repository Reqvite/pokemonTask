import { Button } from "../Button/Button";
import ChevronDownSvg from "../../assets/icons/chevronDown.svg?react";
import CrossSvg from "../../assets/icons/cross.svg?react";
import { Badge } from "../Badge/Badge";
import clsx from "clsx";
import { MouseEvent } from "react";
import { SelectOptionI } from "@/shared/types";

interface SelectBoxProps {
  disabled?: boolean;
  fullWidth?: boolean;
  isOpen: boolean;
  maxSelectedOptions: number;
  handleSelectClick: () => void;
  handleBadgeClick: (e: MouseEvent, value: string) => void;
  handleSelectClear: (e: MouseEvent) => void;
  selectedOptions: Array<SelectOptionI>;
  iconColor?: string;
}
export const SelectBox = (props: SelectBoxProps) => {
  const {
    iconColor,
    disabled,
    fullWidth,
    isOpen,
    handleSelectClick,
    handleBadgeClick,
    handleSelectClear,
    selectedOptions,
    maxSelectedOptions,
  } = props;

  return (
    <div
      className={clsx(
        "flex h-10 gap-2 px-4 py-1 items-center w-fit border-2 border-gray-400 hover:border-purple-500 rounded-md font-medium transition-all",

        isOpen && "border-purple-500",
        fullWidth && "w-full",
        disabled &&
          "disabled:cursor-not-allowed disabled:border-brand opacity-45"
      )}
      onClick={handleSelectClick}
    >
      <div className="flex overflow-x-auto gap-2 scrollbar-thin scrollbar-thumb-purple-200 w-full">
        {selectedOptions.length > 0 ? (
          selectedOptions
            .slice(0, maxSelectedOptions)
            .map(({ content, value, color }) => (
              <Badge
                key={content}
                withButton
                color={color}
                onClick={(e) => handleBadgeClick(e, value)}
              >
                {content}
              </Badge>
            ))
        ) : (
          <span className="">Select {maxSelectedOptions} pokemons</span>
        )}
      </div>
      <div className="ml-auto w-1/10 flex">
        {selectedOptions.length !== 0 && (
          <Button
            withoutHover
            size="xs"
            variant="text"
            className="text-purple-400"
            addonLeft={<CrossSvg color={iconColor} width={24} height={24} />}
            onClick={handleSelectClear}
          />
        )}
        <Button
          withoutHover
          className={clsx(isOpen && "rotate-180")}
          size="xs"
          variant="text"
          addonLeft={<ChevronDownSvg color={iconColor} />}
        />
      </div>
    </div>
  );
};
