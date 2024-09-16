//#ComponentName [Pagina inicial]
import React, { useState } from "react";
import { ListPokemon } from "./components/ListPokemon";
import { usePokeApi } from "../hooks/usePokeApi";

export const Home = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const colorSchema = RN.useColorScheme();
  const props = useProps("EntryApp");
  const navigation = ReactNavigation.useLinkTo();

  return (
    <RN.View>
      <StatusBar backgroundColor={props?.statusBarColor || "#DC0A2D"} />
      <RN.View
        style={{
          width: window.width,
          height: 140,
          backgroundColor: "#DC0A2D",
          padding: 10,
        }}
      >
        <RN.Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Pokedex
        </RN.Text>
        <RN.View style={{ position: "relative" }}>
          <RN.TextInput
            value={textSearch}
            onChangeText={(str) => setTextSearch(str)}
            placeholder="search"
            placeholderTextColor={
              colorSchema === "dark" ? "#FFFFFF" : "#1f1f1f"
            }
            style={{
              backgroundColor: colorSchema === "light" ? "#FFFFFF" : "#1f1f1f",
              color: colorSchema === "dark" ? "#FFFFFF" : "#1f1f1f",
              marginTop: 20,
              paddingHorizontal: 20,
              fontSize: 15,
              borderRadius: 100,
            }}
          />
          <RN.TouchableOpacity
            disabled={!textSearch}
            onPress={() => {
              navigation(`/poke-page?name=${textSearch}`);
            }}
            style={{
              position: "absolute",
              right: 0,
              top: 19,
              width: 100,
              height: 50,
              backgroundColor: "#DC0A00",
              borderColor: "#FFFFFF",
              borderWidth: 3,
              borderStyle: "solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <RN.Text style={{ fontSize: 20, color: "#FFFFFF" }}>Buscar</RN.Text>
          </RN.TouchableOpacity>
        </RN.View>
      </RN.View>
      <ListPokemon />
    </RN.View>
  );
};
