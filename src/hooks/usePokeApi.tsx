import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../page/types/pokemon";
import { usePokeContext } from "../page/context/PokemonContext";

async function getPokemons(url: string | null) {
  const req = await fetch(url || "https://pokeapi.co/api/v2/pokemon/");
  const data = (await req.json()) as {
    results: { name: string; url: string }[];
    count: number;
    next: string;
    previous: null;
  };
  return data;
}

async function getPokemon(name: string) {
  const req = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase(),
  );
  const data = (await req.json()) as Pokemon;
  return data;
}
export const usePokeApi = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPokemon(name)
      .then((res) => {
        setPokemon(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { pokemon, loading };
};

export const useAllPokemon = () => {
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const { setPokemonsUrls } = usePokeContext();
  useEffect(() => {
    getPokemons(null)
      .then((res) => {
        setPokemonsUrls(res.results);
        if (res.next) {
          setNextPage(res.next);
        }
      })
      .catch((err) => {
        console.log("Error al realizar la peticion", err);
      });
  }, []);

  async function nextPageFn() {
    const nextData = await getPokemons(nextPage);
    if (nextData.results) {
      setPokemonsUrls(nextData.results);
      setNextPage(nextData.next);
      setPrevPage(nextData.previous);
    }
  }
  async function prevPageFn() {
    const prevData = await getPokemons(prevPage);
    if (prevData.results) {
      setPokemonsUrls(prevData.results);
      setNextPage(prevData.next);
      setPrevPage(prevData.previous);
    }
  }

  return {
    nextPage: nextPageFn,
    prevPage: prevPageFn,
    next: !!nextPage,
    prev: !!prevPage,
  };
};
