// export interface para la habilidad de un Pokémon
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

// export interface para los movimientos de un Pokémon
export interface Move {
  move: {
    name: string;
    url: string;
  };
}

// export interface para las estadísticas de un Pokémon
export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

// export interface para los tipos de un Pokémon
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// export interface para las especies de un Pokémon
export interface Species {
  name: string;
  url: string;
}

// export interface para una consulta de un Pokémon
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  types: Type[];
  species: Species;
  sprites: {
    front_default: string;
    back_default: string;
    other?: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

//Species
export interface SpeciesRequest {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species: any;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Shape;
  varieties: Variety[];
}

export interface Color {
  name: string;
  url: string;
}

export interface EggGroup {
  name: string;
  url: string;
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Genera {
  genus: string;
  language: Language2;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface Habitat {
  name: string;
  url: string;
}

export interface Name {
  language: Language3;
  name: string;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface PalParkEncounter {
  area: Area;
  base_score: number;
  rate: number;
}

export interface Area {
  name: string;
  url: string;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

export interface Pokedex {
  name: string;
  url: string;
}

export interface Shape {
  name: string;
  url: string;
}

export interface Variety {
  is_default: boolean;
  pokemon: Pokemon;
}

export interface Pokemon {
  name: string;
  url: string;
}
