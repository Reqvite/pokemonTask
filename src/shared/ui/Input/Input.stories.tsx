import type { Meta, StoryObj } from "@storybook/react";
import PlusSvg from "../../assets/icons/plus.svg?react";
import CrossSvg from "../../assets/icons/cross.svg?react";

import { Input } from "./Input";

const meta = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    variant: "primary",
    placeholder: "Email",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Clear: Story = {
  args: {
    variant: "clear",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
  },
};

export const InputWithRightAddon: Story = {
  args: {
    addonRight: <PlusSvg color="black" />,
  },
};

export const InputWithLeftAddon: Story = {
  args: {
    addonLeft: <PlusSvg color="black" />,
  },
};

export const InputWithLeftAndRightAddon: Story = {
  args: {
    addonLeft: <PlusSvg color="black" />,
    addonRight: <CrossSvg color="black" />,
  },
};
