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
  args: {
    options: testOptions,
    selectedOptions: [],
    fullWidth: true,
  },
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
      <div className="w-screen max-w-lg">
        <Select
          className=" text-gray-400"
          options={testOptions}
          selectedOptions={selectedOptions}
          onSetSelectedPokemons={console.log}
          error={""}
          maxSelectedOptions={4}
          //@ts-ignore
          onSelect={setSelectedOptions}
          fetchData={console.log}
          fullWidth
        />
      </div>
    );
  },
};
