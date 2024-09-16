import React, { useRef, useState } from "react";
import { CardPokemon } from "./CardPokemon";
import { useAllPokemon } from "../../hooks/usePokeApi";
import { usePokeContext } from "../context/PokemonContext";
import { FlatList, FlatListProps } from "react-native";

export const ListPokemon = () => {
  const { prev, next, prevPage, nextPage } = useAllPokemon();
  const ref = useRef<FlatList>();
  const { pokemonsUrls } = usePokeContext();
  const colorSchema = RN.useColorScheme();
  return (
    <RN.FlatList
      //@ts-ignore
      ref={ref}
      data={pokemonsUrls}
      ListHeaderComponent={() => {
        return (
          <RN.View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <RN.TouchableOpacity
              onPress={() => prevPage()}
              style={{
                backgroundColor: prev
                  ? "#DC0A2D"
                  : colorSchema === "dark"
                    ? "#4d4d4d"
                    : "#a2a2a2",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4,
              }}
            >
              <RN.Text>Back</RN.Text>
            </RN.TouchableOpacity>
            <RN.TouchableOpacity
              onPress={() => {
                nextPage();
                if (ref.current) {
                }
              }}
              style={{
                backgroundColor: next
                  ? "#DC0A2D"
                  : colorSchema === "dark"
                    ? "#4d4d4d"
                    : "#a2a2a2",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4,
              }}
            >
              <RN.Text>Next</RN.Text>
            </RN.TouchableOpacity>
          </RN.View>
        );
      }}
      ListFooterComponent={() => {
        return (
          <RN.View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <RN.TouchableOpacity
              onPress={() => prevPage()}
              style={{
                backgroundColor: prev ? "#DC0A2D" : "#4d4d4d",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4,
              }}
            >
              <RN.Text>Back</RN.Text>
            </RN.TouchableOpacity>
            <RN.TouchableOpacity
              onPress={() => {
                nextPage();
              }}
              style={{
                backgroundColor: next ? "#DC0A2D" : "#4d4d4d",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4,
              }}
            >
              <RN.Text>Next</RN.Text>
            </RN.TouchableOpacity>
          </RN.View>
        );
      }}
      ListFooterComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        height: screen.height - 190,
        padding: 10,
        width: screen.width,
      }}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: "space-between",
      }}
      renderItem={(props) => <CardPokemon {...props.item} />}
    />
  );
};
