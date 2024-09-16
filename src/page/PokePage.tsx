import React, { useEffect, useState } from "react";
import { usePokeApi } from "../hooks/usePokeApi";
import { SpeciesRequest } from "./types/pokemon";
import { nameToColor, pokemonTypeColors } from "./utils/colors";

export const PokePage = (params: any) => {
  const route = ReactNavigation.useRoute();
  const navigation = ReactNavigation.useLinkTo();
  const colorScheme = RN.useColorScheme();
  const [color, setColor] = useState(
    colorScheme === "dark" ? "#000000" : "#FFFFFF",
  );
  const name = (route.params as { name: string }).name;
  const { pokemon, loading } = usePokeApi(name);
  const [loadingColor, setLoadingColor] = useState(false);

  useEffect(() => {
    if (pokemon && !loading) {
      setLoadingColor(true);
      getColorSpecie(pokemon.species.url).then((res) => {
        console.log(res.color.name);
        setColor(nameToColor(res.color.name));
        setLoadingColor(false);
      });
    }
  }, [loading]);

  if (!pokemon)
    return <RN.Text>No existe un pokemon con ese nombre {name}</RN.Text>;

  return (
    <RN.View style={{ position: "relative", flex: 1 }}>
      <RN.StatusBar backgroundColor={color} />
      {loadingColor ? (
        <RN.ActivityIndicator />
      ) : (
        <>
          <RN.View
            style={{
              width: screen.width,
              height: screen.height * 0.3,
              backgroundColor: color,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
              position: "relative",
            }}
          >
            <RN.Image
              style={{ position: "absolute", right: 0, top: 0, opacity: 0.2 }}
              width={screen.width}
              height={screen.height * 0.3}
              resizeMode="contain"
              source={{
                uri: "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_1280.png",
              }}
            />
            <RN.Text
              style={{
                color: "#FFFFFF",
                fontSize: 25,
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {pokemon?.name}
            </RN.Text>
            <RN.Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              #{pokemon?.id}
            </RN.Text>
          </RN.View>

          <RN.View
            style={{
              height: 0,
              position: "relative",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {(pokemon?.sprites.front_default ||
              pokemon?.sprites.other?.["official-artwork"]?.front_default) && (
              <RN.Image
                source={{
                  uri:
                    pokemon?.sprites.other?.["official-artwork"]
                      ?.front_default || pokemon.sprites.front_default,
                }}
                height={250}
                resizeMode="cover"
                width={250}
              />
            )}
          </RN.View>
          <RN.View
            style={{
              marginTop: 130,
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingHorizontal: 30,
            }}
          >
            {pokemon?.types.map((e) => (
              <RN.Text
                key={`item-type-${e.slot}`}
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  color: pokemonTypeColors[e.type.name],
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {e.type.name}
              </RN.Text>
            ))}
          </RN.View>
          <RN.View>
            <RN.Text
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginVertical: 10,
              }}
            >
              About
            </RN.Text>
            <RN.View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 50,
                borderBottomColor: color,
                borderBottomWidth: 2,
                borderStyle: "dashed",
                paddingBottom: 10,
              }}
            >
              <RN.View>
                <RN.Text
                  style={{ color: colorScheme === "dark" ? "#eee" : "#111" }}
                >
                  Height: {pokemon.height}m
                </RN.Text>
              </RN.View>
              <RN.View>
                <RN.Text
                  style={{ color: colorScheme === "dark" ? "#eee" : "#111" }}
                >
                  Weight: {pokemon.weight}kg
                </RN.Text>
              </RN.View>
            </RN.View>
          </RN.View>
        </>
      )}
      <RN.View
        style={{
          width: "100%",
          height: 50,
          position: "absolute",
          bottom: 0,
        }}
      >
        <RN.TouchableOpacity
          style={{
            backgroundColor: color,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation("/feed");
          }}
        >
          <RN.Text
            style={{ color: "white", fontSize: 20, textAlign: "center" }}
          >
            Home
          </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

async function getColorSpecie(url: string) {
  const req = await fetch(url);
  const json = (await req.json()) as SpeciesRequest;

  return json;
}
