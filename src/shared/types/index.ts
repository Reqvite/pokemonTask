interface SelectOptionI {
  color?: string;
  content: string | number;
  value: string;
  url?: string;
}

interface PokemonI {
  id: string;
  sprites: {
    back_default: string;
  };
  name: string;
  url: string;
}

export type { SelectOptionI, PokemonI };
