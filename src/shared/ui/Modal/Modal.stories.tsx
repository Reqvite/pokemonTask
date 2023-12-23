import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { PokemonCard } from "@/components/PokemonCard/PokemonCard";
import { firstLetterToUpperCase } from "@/shared/lib/helpers/firstLetterToUpperCase";

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

const data = [
  {
    id: 1,
    name: "test",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
  },
  {
    id: 2,
    name: "test",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
  },
  {
    id: 3,
    name: "test",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
  },
  {
    id: 4,
    name: "test",
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
  },
];

export const Primary: Story = {
  args: {
    isOpen: true,
    children: (
      <>
        <div className="bg-gray">
          <ul className="flex gap-2 justify-center items-center flex-wrap">
            {data.map(({ sprites, id, name }) => (
              <PokemonCard
                key={id}
                src={sprites.back_default}
                name={firstLetterToUpperCase(name)}
              />
            ))}
          </ul>
          <div className="mt-3 flex justify-end items-center gap-2">
            <Button variant="outline" onClick={console.log} size="lg">
              Cancle
            </Button>
            <Button variant="primary" size="lg">
              Start
            </Button>
          </div>
        </div>
      </>
    ),
  },
};
