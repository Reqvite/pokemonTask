import { Form, Hero } from "@/components";
import { $api } from "@/shared/api/api";
import { PokemonI, SelectOptionI } from "@/shared/types";
import { useCallback, useEffect, useState } from "react";

function App() {
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
      const name = el.name.charAt(0).toUpperCase() + el.name.slice(1);
      return {
        content: name,
        value: el.name,
        url: el.url,
      };
    });
  };

  const newData = normilizedData();

  return (
    <main className="container mx-auto px-4">
      <Hero
        title="Welcome to the Tower Battlle"
        description="Fill out a form with your name and last name and then select your team
          of 4 Pokémon to fight in the Battle Tower."
      />
      <Form
        selectedPokemons={selectedPokemons}
        fetchData={fetchPockemon}
        options={newData}
        onSelect={setSelectedOptions}
        onSetSelectedPokemons={setSelectedPokemons}
        selectedOptions={selectedOptions}
      />
    </main>
  );
}

export default App;
