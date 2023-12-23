import { Form, Hero } from "@/components";
import { useApp } from "@/shared/lib/hooks/useApp";

function App() {
  const {
    newData,
    selectedOptions,
    selectedPokemons,
    setSelectedOptions,
    setSelectedPokemons,
    fetchPockemon,
  } = useApp();

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
