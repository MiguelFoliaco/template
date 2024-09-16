import React from "react";
import { usePokeApi } from "../../hooks/usePokeApi";

export const CardPokemon = ({ name }: { name: string; url: string }) => {
  const { pokemon, loading } = usePokeApi(name);
  const colorSchemeName = RN.useColorScheme();
  const navigation = ReactNavigation.useLinkTo();
  return (
    <RN.TouchableOpacity
      onPress={() => {
        navigation(`/poke-page?name=${name}`);
      }}
      style={{
        width: window.width * 0.35,
        height: window.width * 0.35,
        borderColor: colorSchemeName === "dark" ? "#333333" : "#a2a2a2",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 7,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      {!pokemon?.sprites?.front_default ? (
        loading && <RN.ActivityIndicator />
      ) : (
        <RN.Image
          source={{ uri: pokemon?.sprites?.front_default }}
          width={window.width * 0.2}
          height={window.width * 0.2}
        />
      )}
      <RN.Text>{name || "Sin nombre"}</RN.Text>
    </RN.TouchableOpacity>
  );
};
