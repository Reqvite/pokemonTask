import { $api } from "@/shared/api/api";
import { PokemonI, SelectOptionI } from "@/shared/types";
import { useEffect, useState } from "react";
import { firstLetterToUpperCase } from "../helpers/firstLetterToUpperCase";

export const useApp = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonI[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<SelectOptionI[]>([]);

  useEffect(() => {
    const getPokemons = async (e?: string) => {
      try {
        const response = await $api.get("pokemon?limit=100");
        setPokemonData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getPokemons();
  }, []);

  const normilizedData = () => {
    return pokemonData.map((el: PokemonI) => {
      const name = firstLetterToUpperCase(el.name);
      return {
        content: name,
        value: el.name,
        url: el.url,
      };
    });
  };

  const onSelect = (updatetedOptions: SelectOptionI[]) => {
    setSelectedOptions(updatetedOptions);
  };

  const newData = normilizedData();
  useEffect(() => {
    if (selectedOptions.length === 4) {
      setSelectedPokemons([]);
      const fetchData = async () => {
        try {
          const promises = Promise.all(
            selectedOptions.map(async (e) => {
              const response = await $api.get(`pokemon/${e.value}`);
              return response.data;
            })
          );

          const selectedPokemonsData = await promises;

          setSelectedPokemons(selectedPokemonsData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [selectedOptions]);

  return {
    newData,
    selectedOptions,
    selectedPokemons,
    setSelectedOptions,
    onSelect,
  };
};
