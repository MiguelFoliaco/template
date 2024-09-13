import { useEffect, useState } from "react";

async function getPokemon() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await req.json();
  return {
    name: data?.name as string,
    img: data?.sprites?.front_default as string,
  };
}
export const usePokeApi = () => {
  const [pokemon, setPokemon] = useState<{ name: string; img: string }>({
    img: "",
    name: "",
  });
  useEffect(() => {
    getPokemon().then((res) => {
      setPokemon(res);
    });
  }, []);

  return pokemon;
};
