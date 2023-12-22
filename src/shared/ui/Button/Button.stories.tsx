import type { Meta, StoryObj } from "@storybook/react";
import PlusSvg from "../../assets/icons/plus.svg?react";
import CrossSvg from "../../assets/icons/cross.svg?react";

import { Button } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Click me",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const ButtonWithLeftAddon: Story = {
  args: {
    variant: "outline",
    addonLeft: <PlusSvg />,
  },
};

export const ButtonWithRightAddon: Story = {
  args: {
    variant: "outline",
    addonRight: <PlusSvg />,
  },
};

export const ButtonWithRightAndLeftAddon: Story = {
  args: {
    variant: "outline",
    addonLeft: <PlusSvg />,
    addonRight: <CrossSvg />,
  },
};
