import { MouseEvent, useState } from "react";
import clsx from "clsx";
import { SelectBox } from "./SelectBox";
import { DropDownBox } from "./DropDownBox";
import { PokemonI, SelectOptionI } from "@/shared/types";
import { Label } from "../Label/Label";

interface CustomSelectProps {
  onSetSelectedPokemons: (
    callback: (prevPokemons: PokemonI[]) => PokemonI[]
  ) => void;
  error?: string;
  disabled?: boolean;
  fullWidth: boolean;
  label: string;
  options: Array<SelectOptionI>;
  onSelect: (options: SelectOptionI[], value?: string) => void;
  selectedOptions?: Array<SelectOptionI>;
  maxSelectedOptions?: number;
  className?: string;
  iconColor?: string;
}

export const Select = (props: CustomSelectProps) => {
  const {
    onSetSelectedPokemons,
    error,
    iconColor = "black",
    label,
    disabled,
    fullWidth,
    options = [],
    onSelect,
    selectedOptions = [],
    maxSelectedOptions = 4,
    className,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SelectOptionI) => {
    if (!selectedOptions.some(({ value }) => value === option.value)) {
      const updatedSelectedOptions = [...selectedOptions, option];
      if (updatedSelectedOptions.length <= maxSelectedOptions) {
        onSelect(updatedSelectedOptions, option.value);
      }
    }
    setIsOpen(false);
  };

  const handleBadgeClick = (e: MouseEvent, value: string) => {
    e.stopPropagation();

    const updatedSelectedOptions = selectedOptions.filter(
      (option) => option.value !== value
    );
    onSelect(updatedSelectedOptions);

    onSetSelectedPokemons((prevPokemons) => {
      return prevPokemons.filter((pokemon) =>
        updatedSelectedOptions.some((option) => option.value === pokemon.name)
      );
    });
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectClear = (e: MouseEvent) => {
    e.stopPropagation();
    onSelect([]);
    //@ts-ignore
    onSetSelectedPokemons([]);
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className={clsx("relative", fullWidth && "w-full", className)}>
        <SelectBox
          iconColor={iconColor}
          disabled={disabled}
          fullWidth={fullWidth}
          isOpen={isOpen}
          handleSelectClick={handleSelectClick}
          handleBadgeClick={handleBadgeClick}
          handleSelectClear={handleSelectClear}
          selectedOptions={selectedOptions}
          maxSelectedOptions={maxSelectedOptions}
        />
        {isOpen && (
          <DropDownBox
            options={options}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
        )}
      </div>
      <span className={clsx(error ? "text-red-500" : "text-transparent")}>
        {error ? error : "0"}
      </span>
    </div>
  );
};
