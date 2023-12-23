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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-gray-900"
      title={"Your team is ready, prepare for battle"}
    >
      <div className="bg-gray">
        <ul className="flex gap-2 justify-center items-center flex-wrap">
          {selectedPokemons.map(({ sprites, id, name }) => (
            <PokemonCard
              key={id}
              src={sprites.back_default}
              name={firstLetterToUpperCase(name)}
            />
          ))}
        </ul>
        <div className="mt-3 flex justify-end items-center gap-2">
          <Button variant="outline" onClick={onClose} size="lg">
            Cancle
          </Button>
          <Button variant="primary" size="lg">
            Start
          </Button>
        </div>
      </div>
    </Modal>
  );
};
