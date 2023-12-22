import type { Meta, StoryObj } from "@storybook/react";
import PlusSvg from "../../assets/icons/plus.svg?react";
import CrossSvg from "../../assets/icons/cross.svg?react";

import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <div className="bg-gray">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3
                className="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Title
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">text</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end items-center gap-2">
            <Button variant="outline" fullWidth>
              Cancle
            </Button>
            <Button variant="primary" fullWidth>
              Start
            </Button>
          </div>
        </div>
      </>
    ),
  },
};
