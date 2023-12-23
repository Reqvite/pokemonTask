import { PokemonI } from "@/shared/types";
import { Button, Modal } from "@/shared/ui";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { firstLetterToUpperCase } from "@/shared/lib/helpers/firstLetterToUpperCase";

interface StartModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPokemons: PokemonI[];
}
export const StartModal = (props: StartModalProps) => {
  const { isOpen, selectedPokemons, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-gray-900">
      <div className="bg-gray">
        <ul className="flex justify-center items-center flex-wrap">
          {selectedPokemons.map(({ sprites, id, name }) => (
            <li key={id} className="m-2">
              <PokemonCard
                src={sprites.back_default}
                name={firstLetterToUpperCase(name)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-3 flex justify-end items-center gap-2">
          <Button variant="outline" fullWidth>
            Cancle
          </Button>
          <Button variant="primary" fullWidth>
            Start
          </Button>
        </div>
      </div>
    </Modal>
  );
};
