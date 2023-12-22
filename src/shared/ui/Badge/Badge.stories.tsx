import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "Shared/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Badge",
    onClick: () => console.log,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Badge",
  },
};

export const WithButton: Story = {
  args: {
    withButton: true,
  },
};
