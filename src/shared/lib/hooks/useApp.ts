import { $api } from "@/shared/api/api";
import { PokemonI, SelectOptionI } from "@/shared/types";
import { useCallback, useEffect, useState } from "react";
import { firstLetterToUpperCase } from "../helpers/firstLetterToUpperCase";

export const useApp = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonI[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<SelectOptionI[]>([]);

  const fetchPockemon = useCallback(async (e?: string) => {
    try {
      const response = await $api.get(`pokemon/${e}`);
      setSelectedPokemons((prevSelectedPokemons) => [
        ...prevSelectedPokemons,
        response.data,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

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

  const onSelect = (updatetedOptions: SelectOptionI[], value?: string) => {
    setSelectedOptions(updatetedOptions);
    if (value) {
      fetchPockemon(value);
    }
  };

  const newData = normilizedData();
  useEffect(() => {
    console.log(selectedOptions.length);
    if (selectedOptions.length === 4) {
      console.log(1);
      const fetchData = async () => {
        try {
          const promises = selectedOptions.map(async (e) => {
            const response = await $api.get(`pokemon/${e.value}`);
            return response.data;
          });

          const selectedPokemonsData = await Promise.all(promises);

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
    setSelectedPokemons,
    onSelect,
  };
};
