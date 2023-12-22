import clsx from "clsx";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useState } from "react";

interface DropDownBoxProps {
  options: Array<any>;
  selectedOptions: Array<any>;
  handleOptionClick: (option: any) => void;
}
export const DropDownBox = (props: DropDownBoxProps) => {
  const { options, selectedOptions, handleOptionClick } = props;
  const [searchValue, setSearchValue] = useState("");

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className="absolute top-full left-0 mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-md z-10 max-h-96 overflow-auto">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e)}
        placeholder="Pokemon name"
        variant="clear"
        autoFocus
      />
      {filteredOptions.map((option) => (
        <li key={option.content} className={clsx("cursor-pointer p-2")}>
          <Button
            disabled={selectedOptions.find(
              ({ value }) => value === option.value
            )}
            fullWidth
            variant="text"
            onClick={() => handleOptionClick(option)}
          >
            {option.content}
          </Button>
        </li>
      ))}
    </ul>
  );
};
