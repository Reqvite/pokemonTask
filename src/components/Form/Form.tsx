import { PokemonI, SelectOptionI } from "@/shared/types";
import { Button, Input, Select } from "@/shared/ui";
import { nameRule } from "@/shared/validation/rules";
import { Controller } from "react-hook-form";
import { StartModal } from "../StartModal/StartModal";
import { useFormL } from "./model/useForm";

interface FormProps {
  selectedPokemons: PokemonI[];
  options: SelectOptionI[];
  onSelect: (options: SelectOptionI[]) => void;
  selectedOptions: SelectOptionI[];
}

const maxSelectedOptions = 4;

export const Form = (props: FormProps) => {
  const { options, selectedOptions, onSelect, selectedPokemons } = props;
  const {
    onToggleModal,
    handleSubmit,
    onSubmit,
    control,
    isOpen,
    errors,
    selectError,
  } = useFormL({ selectedOptions, maxSelectedOptions });
  return (
    <section className="relative rounded-lg p-8 sm:p-12 shadow-2xl">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          rules={nameRule("First")}
          render={({ field }) => (
            <Input
              {...field}
              error={errors.firstName && errors.firstName.message}
              className="bg-gray-800"
              fullWidth
              size="lg"
              label="First name"
              placeholder="Write your name"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={nameRule("Last")}
          render={({ field }) => (
            <Input
              {...field}
              error={errors.lastName && errors.lastName.message}
              className="bg-gray-800"
              fullWidth
              size="lg"
              label="Surname"
              placeholder="Write your surname"
            />
          )}
        />
        <Select
          error={selectError}
          maxSelectedOptions={maxSelectedOptions}
          onSelect={onSelect}
          selectedOptions={selectedOptions}
          options={options}
          label={"Pokemons"}
          fullWidth
          className="bg-gray-800 text-gray-400"
          iconColor="white"
        />
        <div className="flex justify-center">
          <Button variant="primary" className="text-white" type="submit">
            Start Battle!
          </Button>
        </div>
      </form>
      <StartModal
        isOpen={isOpen}
        onClose={onToggleModal}
        selectedPokemons={selectedPokemons}
      />
    </section>
  );
};
