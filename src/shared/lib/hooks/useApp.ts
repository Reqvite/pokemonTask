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

  const newData = normilizedData();

  return {
    newData,
    selectedOptions,
    selectedPokemons,
    setSelectedOptions,
    setSelectedPokemons,
    fetchPockemon,
  };
};
