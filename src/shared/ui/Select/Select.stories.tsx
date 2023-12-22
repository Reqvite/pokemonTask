// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { useState } from "react";

const meta = {
  title: "Shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onSelect: () => console.log,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const testOptions = [
  { value: "BB", content: "BB" },
  { value: "AA", content: "AA" },
  { value: "CC", content: "CC" },
  { value: "VV", content: "VV" },
  { value: "SS", content: "SS" },
];

export const Primary: Story = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectOptionI[]>([]);

    return (
      <Select
        className=" text-gray-400"
        options={testOptions}
        selectedOptions={console.log}
        onSetSelectedPokemons={console.log}
        error={""}
        maxSelectedOptions={4}
        onSelect={setSelectedOptions}
        selectedOptions={selectedOptions}
        fetchData={console.log}
        label={"Pokemons"}
        fullWidth
      />
    );
  },
};
