import { SelectOptionI } from "@/shared/types";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}
interface UseFormI {
  selectedOptions: SelectOptionI[];
  maxSelectedOptions: number;
}

export const useFormL = ({ selectedOptions, maxSelectedOptions }: UseFormI) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectError, setSelectError] = useState("");

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
    if (selectedOptions.length === maxSelectedOptions) {
      setSelectError("");
    } else if (
      selectedOptions.length !== maxSelectedOptions &&
      submitCount !== 0
    ) {
      setSelectError("You only can select 4 Pokemon");
    } else {
      setSelectError("");
    }
  }, [JSON.stringify(errors), submitCount, selectedOptions]);

  return {
    onToggleModal,
    handleSubmit,
    onSubmit,
    control,
    isOpen,
    errors,
    selectError,
  };
};
