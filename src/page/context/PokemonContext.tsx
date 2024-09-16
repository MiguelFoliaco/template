import { ReactNode, useContext, useState } from "react";
import { Pokemon } from "../types/pokemon";

type contextPokemon = {
  pokemons: Pokemon[];
  pokemonsUrls: { url: string; name: string }[];
  setPokemons: (data: Pokemon[]) => void;
  setPokemonsUrls: (data: { url: string; name: string }[]) => void;
};
export const PokemonContext = React.createContext<contextPokemon>({
  pokemons: [],
  setPokemons: function (data: Pokemon[]): void {
    throw new Error("Function not implemented.");
  },
  pokemonsUrls: [],
  setPokemonsUrls: function (data: { url: string; name: string }[]): void {
    throw new Error("Function not implemented.");
  },
});

export const ProviderPokemon = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsUrls, setPokemonsUrls] = useState<
    { name: string; url: string }[]
  >([]);
  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        pokemonsUrls,
        setPokemonsUrls,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokeContext = () => {
  return useContext(PokemonContext);
};
