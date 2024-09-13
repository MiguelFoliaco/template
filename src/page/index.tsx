import React from "react";
import { usePokeApi } from "../hooks/usePokeApi";

export const Home = () => {
  const pokemon = usePokeApi();
  return (
    <RN.View>
      <RN.StatusBar backgroundColor={"#7d0b0b"} />
      <RN.Text>El Pokemón: {pokemon?.name}</RN.Text>
      {pokemon?.img ? (
        <RN.Image source={{ uri: pokemon?.img }} width={200} height={200} />
      ) : (
        <RN.ActivityIndicator color={"#a193ff"} />
      )}
    </RN.View>
  );
};
