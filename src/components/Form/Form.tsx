import { PokemonI, SelectOptionI } from "@/shared/types";
import { Button, Input, Select } from "@/shared/ui";
import { nameRule } from "@/shared/validation/rules";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { StartModal } from "../StartModal/StartModal";

interface FormProps {
  selectedPokemons: PokemonI[];
  fetchData: any;
  options: SelectOptionI[];
  onSelect: any;
  selectedOptions: any;
  onSetSelectedPokemons: (
    callback: (prevPokemons: PokemonI[]) => PokemonI[]
  ) => void;
}
interface IFormInput {
  firstName: string;
  lastName: string;
}
const maxSelectedOptions = 4;

export const Form = (props: FormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectError, setSelectError] = useState("");
  const {
    fetchData,
    options,
    selectedOptions,
    onSelect,
    selectedPokemons,
    onSetSelectedPokemons,
  } = props;
  const {
    handleSubmit,
    control,
    formState: { errors, submitCount },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onToggleModal = () => {
    if (Object.keys(errors).length !== 0 || selectError) {
      return;
    }
    setIsOpen((prev) => !prev);
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    onToggleModal();
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      if (selectedPokemons.length !== maxSelectedOptions) {
        setSelectError("You only can select 4 Pokemon");
      }
    }
    if (selectedPokemons.length === maxSelectedOptions) {
      setSelectError("");
    }
  }, [JSON.stringify(errors), submitCount]);

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
          onSetSelectedPokemons={onSetSelectedPokemons}
          error={selectError}
          maxSelectedOptions={maxSelectedOptions}
          onSelect={onSelect}
          selectedOptions={selectedOptions}
          options={options}
          fetchData={fetchData}
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
      <StartModal isOpen={isOpen} onClose={onToggleModal} />
    </section>
  );
};
