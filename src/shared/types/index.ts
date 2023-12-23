interface SelectOptionI {
  color?: string;
  content: string | number;
  value: string;
  url: string;
}

interface PokemonI {
  name: string;
  url: string;
}

export type { SelectOptionI, PokemonI };
