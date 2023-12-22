import { Button } from "../Button/Button";
import ChevronDownSvg from "../../assets/icons/chevronDown.svg?react";
import CrossSvg from "../../assets/icons/cross.svg?react";
import { Badge } from "../Badge/Badge";
import clsx from "clsx";
import { MouseEvent } from "react";
import { SelectOptionI } from "@/shared/types";

interface SelectBoxProps<T> {
  disabled?: boolean;
  fullWidth?: boolean;
  isOpen: boolean;
  maxSelectedOptions: number;
  handleSelectClick: () => void;
  handleBadgeClick: (e: MouseEvent, value: string) => void;
  handleSelectClear: (e: MouseEvent) => void;
  selectedOptions: Array<T>;
  iconColor?: string;
}
export const SelectBox = <T extends SelectOptionI>(
  props: SelectBoxProps<T>
) => {
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
        "flex h-10 gap-2 px-4 py-1 items-center w-fit border-2 border-gray-400 hover:border-purple-500 rounded-md font-medium transition-all min-w-96",

        isOpen && "border-purple-500",
        fullWidth && "w-full",
        disabled &&
          "disabled:cursor-not-allowed disabled:border-brand opacity-45"
      )}
      onClick={handleSelectClick}
    >
      <div className="flex overflow-x-auto gap-2 scrollbar-thin scrollbar-thumb-purple-300 w-full">
        {selectedOptions.length > 0 ? (
          selectedOptions
            .slice(0, maxSelectedOptions)
            .map(({ content, value }) => (
              <Badge
                key={content}
                withButton
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
            size="xs"
            variant="text"
            className="text-purple-400"
            addonLeft={<CrossSvg color={iconColor} />}
            onClick={handleSelectClear}
          />
        )}
        <Button
          className={clsx(isOpen && "rotate-180")}
          size="xs"
          variant="text"
          addonLeft={<ChevronDownSvg color={iconColor} />}
        />
      </div>
    </div>
  );
};
