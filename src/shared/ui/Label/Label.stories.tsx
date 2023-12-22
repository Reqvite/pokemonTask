import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import { Input } from "../Input/Input";

const meta = {
  title: "Shared/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Email",
    children: <Input placeholder="Pokemon name" />,
  },
};

export const IsOptional: Story = {
  args: {
    isOptional: true,
    label: "Email",
    children: <Input placeholder="Pokemon name" />,
  },
};
