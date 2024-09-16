return function(){
const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    ThemeProvider,
    {
      value: colorScheme === "dark" ? ReactNavigation.DarkTheme : ReactNavigation.DefaultTheme
    },
    /* @__PURE__ */ React.createElement(ProviderPokemon, null, /* @__PURE__ */ React.createElement(
      Stack.Navigator,
      {
        initialRouteName: "/feed",
        screenOptions: {
          headerShown: false
        }
      },
      /* @__PURE__ */ React.createElement(Stack.Screen, { name: "feed", component: Home }),
      /* @__PURE__ */ React.createElement(Stack.Screen, { name: "poke-page", component: PokePage })
    ))
  ));
};
const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const colorSchema = RN.useColorScheme();
  const props = useProps("EntryApp");
  const navigation = ReactNavigation.useLinkTo();
  return /* @__PURE__ */ React.createElement(RN.View, null, /* @__PURE__ */ React.createElement(StatusBar, { backgroundColor: props?.statusBarColor || "#DC0A2D" }), /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        width: window.width,
        height: 140,
        backgroundColor: "#DC0A2D",
        padding: 10
      }
    },
    /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 20, color: "white", fontWeight: "bold" } }, "Pokedex"),
    /* @__PURE__ */ React.createElement(RN.View, { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
      RN.TextInput,
      {
        value: textSearch,
        onChangeText: (str) => setTextSearch(str),
        placeholder: "search",
        placeholderTextColor: colorSchema === "dark" ? "#FFFFFF" : "#1f1f1f",
        style: {
          backgroundColor: colorSchema === "light" ? "#FFFFFF" : "#1f1f1f",
          color: colorSchema === "dark" ? "#FFFFFF" : "#1f1f1f",
          marginTop: 20,
          paddingHorizontal: 20,
          fontSize: 15,
          borderRadius: 100
        }
      }
    ), /* @__PURE__ */ React.createElement(
      RN.TouchableOpacity,
      {
        disabled: !textSearch,
        onPress: () => {
          navigation(`/poke-page?name=${textSearch}`);
        },
        style: {
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
          borderBottomRightRadius: 100
        }
      },
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 20, color: "#FFFFFF" } }, "Buscar")
    ))
  ), /* @__PURE__ */ React.createElement(ListPokemon, null));
};
const PokePage = (params) => {
  const route = ReactNavigation.useRoute();
  const navigation = ReactNavigation.useLinkTo();
  const colorScheme = RN.useColorScheme();
  const [color, setColor] = useState(
    colorScheme === "dark" ? "#000000" : "#FFFFFF"
  );
  const name = route.params.name;
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
    return /* @__PURE__ */ React.createElement(RN.Text, null, "No existe un pokemon con ese nombre ", name);
  return /* @__PURE__ */ React.createElement(RN.View, { style: { position: "relative", flex: 1 } }, /* @__PURE__ */ React.createElement(RN.StatusBar, { backgroundColor: color }), loadingColor ? /* @__PURE__ */ React.createElement(RN.ActivityIndicator, null) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        width: screen.width,
        height: screen.height * 0.3,
        backgroundColor: color,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        position: "relative"
      }
    },
    /* @__PURE__ */ React.createElement(
      RN.Image,
      {
        style: { position: "absolute", right: 0, top: 0, opacity: 0.2 },
        width: screen.width,
        height: screen.height * 0.3,
        resizeMode: "contain",
        source: {
          uri: "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_1280.png"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      RN.Text,
      {
        style: {
          color: "#FFFFFF",
          fontSize: 25,
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center"
        }
      },
      pokemon?.name
    ),
    /* @__PURE__ */ React.createElement(
      RN.Text,
      {
        style: {
          color: "#FFFFFF",
          fontSize: 20,
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center"
        }
      },
      "#",
      pokemon?.id
    )
  ), /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        height: 0,
        position: "relative",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
      }
    },
    (pokemon?.sprites.front_default || pokemon?.sprites.other?.["official-artwork"]?.front_default) && /* @__PURE__ */ React.createElement(
      RN.Image,
      {
        source: {
          uri: pokemon?.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default
        },
        height: 250,
        resizeMode: "cover",
        width: 250
      }
    )
  ), /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        marginTop: 130,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 30
      }
    },
    pokemon?.types.map((e) => /* @__PURE__ */ React.createElement(
      RN.Text,
      {
        key: `item-type-${e.slot}`,
        style: {
          textAlign: "center",
          fontSize: 15,
          color: pokemonTypeColors[e.type.name],
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2
        }
      },
      e.type.name
    ))
  ), /* @__PURE__ */ React.createElement(RN.View, null, /* @__PURE__ */ React.createElement(
    RN.Text,
    {
      style: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginVertical: 10
      }
    },
    "About"
  ), /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 50,
        borderBottomColor: color,
        borderBottomWidth: 2,
        borderStyle: "dashed",
        paddingBottom: 10
      }
    },
    /* @__PURE__ */ React.createElement(RN.View, null, /* @__PURE__ */ React.createElement(
      RN.Text,
      {
        style: { color: colorScheme === "dark" ? "#eee" : "#111" }
      },
      "Height: ",
      pokemon.height,
      "m"
    )),
    /* @__PURE__ */ React.createElement(RN.View, null, /* @__PURE__ */ React.createElement(
      RN.Text,
      {
        style: { color: colorScheme === "dark" ? "#eee" : "#111" }
      },
      "Weight: ",
      pokemon.weight,
      "kg"
    ))
  ))), /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        width: "100%",
        height: 50,
        position: "absolute",
        bottom: 0
      }
    },
    /* @__PURE__ */ React.createElement(
      RN.TouchableOpacity,
      {
        style: {
          backgroundColor: color,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        },
        onPress: () => {
          navigation("/feed");
        }
      },
      /* @__PURE__ */ React.createElement(
        RN.Text,
        {
          style: { color: "white", fontSize: 20, textAlign: "center" }
        },
        "Home"
      )
    )
  ));
};
async function getColorSpecie(url) {
  const req = await fetch(url);
  const json = await req.json();
  return json;
}
const Colors = [
  {
    name: "Red",
    hex: "#FF6666",
    description: "Rojo moderado, brillante pero no tan intenso."
  },
  {
    name: "Pink",
    hex: "#FF99C8",
    description: "Rosa brillante, pero menos saturado."
  },
  {
    name: "Orange",
    hex: "#FFA07A",
    description: "Naranja suave, vibrante pero no agresivo."
  },
  {
    name: "Yellow",
    hex: "#FFDF00",
    description: "Amarillo claro, luminoso pero no excesivo."
  },
  {
    name: "Green",
    hex: "#66CC66",
    description: "Verde vibrante pero no demasiado intenso."
  },
  {
    name: "Blue",
    hex: "#6699FF",
    description: "Azul moderado, vivo pero no demasiado oscuro."
  },
  {
    name: "Purple",
    hex: "#9966CC",
    description: "P\xFArpura suave, menos intenso pero a\xFAn vivo."
  },
  {
    name: "Teal",
    hex: "#66CCCC",
    description: "Teal moderado, un verde azulado m\xE1s suave."
  },
  {
    name: "Lavender",
    hex: "#C299FF",
    description: "Lavanda claro, vibrante pero no excesivo."
  },
  {
    name: "Peach",
    hex: "#FFB380",
    description: "Durazno moderado, c\xE1lido y suave."
  },
  {
    name: "brown",
    hex: "#FFB380",
    description: "Durazno moderado, c\xE1lido y suave."
  },
  {
    name: "Mint",
    hex: "#66FFCC",
    description: "Menta suave, refrescante y vibrante pero no agresivo."
  },
  {
    name: "Coral",
    hex: "#FF9966",
    description: "Coral suave, c\xE1lido pero no excesivamente fuerte."
  },
  {
    name: "Beige",
    hex: "#FFF2CC",
    description: "Beige claro, con un toque vibrante."
  },
  {
    name: "Aqua",
    hex: "#80FFFF",
    description: "Aqua moderado, un tono suave pero brillante."
  },
  {
    name: "Grey",
    hex: "#B3B3B3",
    description: "Gris suave y ligeramente apagado."
  }
];
const nameToColor = (name) => {
  const color = Colors.find((e) => e.name.toLowerCase() === name.toLowerCase());
  if (!color) return "#000000";
  return color.hex;
};
const pokemonTypeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};
const PokemonContext = React.createContext({
  pokemons: [],
  setPokemons: function(data) {
    throw new Error("Function not implemented.");
  },
  pokemonsUrls: [],
  setPokemonsUrls: function(data) {
    throw new Error("Function not implemented.");
  }
});
const ProviderPokemon = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  return /* @__PURE__ */ React.createElement(
    PokemonContext.Provider,
    {
      value: {
        pokemons,
        setPokemons,
        pokemonsUrls,
        setPokemonsUrls
      }
    },
    children
  );
};
const usePokeContext = () => {
  return useContext(PokemonContext);
};
const CardPokemon = ({ name }) => {
  const { pokemon, loading } = usePokeApi(name);
  const colorSchemeName = RN.useColorScheme();
  const navigation = ReactNavigation.useLinkTo();
  return /* @__PURE__ */ React.createElement(
    RN.TouchableOpacity,
    {
      onPress: () => {
        navigation(`/poke-page?name=${name}`);
      },
      style: {
        width: window.width * 0.35,
        height: window.width * 0.35,
        borderColor: colorSchemeName === "dark" ? "#333333" : "#a2a2a2",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 7,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
      }
    },
    !pokemon?.sprites?.front_default ? loading && /* @__PURE__ */ React.createElement(RN.ActivityIndicator, null) : /* @__PURE__ */ React.createElement(
      RN.Image,
      {
        source: { uri: pokemon?.sprites?.front_default },
        width: window.width * 0.2,
        height: window.width * 0.2
      }
    ),
    /* @__PURE__ */ React.createElement(RN.Text, null, name || "Sin nombre")
  );
};
const ListPokemon = () => {
  const { prev, next, prevPage, nextPage } = useAllPokemon();
  const ref = useRef();
  const { pokemonsUrls } = usePokeContext();
  const colorSchema = RN.useColorScheme();
  return /* @__PURE__ */ React.createElement(
    RN.FlatList,
    {
      ref,
      data: pokemonsUrls,
      ListHeaderComponent: () => {
        return /* @__PURE__ */ React.createElement(
          RN.View,
          {
            style: {
              flexDirection: "row",
              justifyContent: "space-evenly"
            }
          },
          /* @__PURE__ */ React.createElement(
            RN.TouchableOpacity,
            {
              onPress: () => prevPage(),
              style: {
                backgroundColor: prev ? "#DC0A2D" : colorSchema === "dark" ? "#4d4d4d" : "#a2a2a2",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4
              }
            },
            /* @__PURE__ */ React.createElement(RN.Text, null, "Back")
          ),
          /* @__PURE__ */ React.createElement(
            RN.TouchableOpacity,
            {
              onPress: () => {
                nextPage();
                if (ref.current) {
                }
              },
              style: {
                backgroundColor: next ? "#DC0A2D" : colorSchema === "dark" ? "#4d4d4d" : "#a2a2a2",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4
              }
            },
            /* @__PURE__ */ React.createElement(RN.Text, null, "Next")
          )
        );
      },
      ListFooterComponent: () => {
        return /* @__PURE__ */ React.createElement(
          RN.View,
          {
            style: {
              flexDirection: "row",
              justifyContent: "space-evenly"
            }
          },
          /* @__PURE__ */ React.createElement(
            RN.TouchableOpacity,
            {
              onPress: () => prevPage(),
              style: {
                backgroundColor: prev ? "#DC0A2D" : "#4d4d4d",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4
              }
            },
            /* @__PURE__ */ React.createElement(RN.Text, null, "Back")
          ),
          /* @__PURE__ */ React.createElement(
            RN.TouchableOpacity,
            {
              onPress: () => {
                nextPage();
              },
              style: {
                backgroundColor: next ? "#DC0A2D" : "#4d4d4d",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 4
              }
            },
            /* @__PURE__ */ React.createElement(RN.Text, null, "Next")
          )
        );
      },
      ListFooterComponentStyle: {
        marginBottom: 20
      },
      style: {
        height: screen.height - 190,
        padding: 10,
        width: screen.width
      },
      keyExtractor: (item) => item.name,
      numColumns: 2,
      contentContainerStyle: {
        justifyContent: "space-between"
      },
      renderItem: (props) => /* @__PURE__ */ React.createElement(CardPokemon, { ...props.item })
    }
  );
};
async function getPokemons(url) {
  const req = await fetch(url || "https://pokeapi.co/api/v2/pokemon/");
  const data = await req.json();
  return data;
}
async function getPokemon(name) {
  const req = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase()
  );
  const data = await req.json();
  return data;
}
const usePokeApi = (name) => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPokemon(name).then((res) => {
      setPokemon(res);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return { pokemon, loading };
};
const useAllPokemon = () => {
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const { setPokemonsUrls } = usePokeContext();
  useEffect(() => {
    getPokemons(null).then((res) => {
      setPokemonsUrls(res.results);
      if (res.next) {
        setNextPage(res.next);
      }
    }).catch((err) => {
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
    prev: !!prevPage
  };
};

 return App
}