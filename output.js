return function(){
const App = () => {
  return /* @__PURE__ */ React.createElement(Home, null);
};
const Home = () => {
  const pokemon = usePokeApi();
  return /* @__PURE__ */ React.createElement(RN.View, null, /* @__PURE__ */ React.createElement(RN.StatusBar, { backgroundColor: "#7d0b0b" }), /* @__PURE__ */ React.createElement(RN.Text, null, "El Pokem\xF3n: ", pokemon?.name), pokemon?.img ? /* @__PURE__ */ React.createElement(RN.Image, { source: { uri: pokemon?.img }, width: 200, height: 200 }) : /* @__PURE__ */ React.createElement(RN.ActivityIndicator, { color: "#a193ff" }));
};
async function getPokemon() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await req.json();
  return {
    name: data?.name,
    img: data?.sprites?.front_default
  };
}
const usePokeApi = () => {
  const [pokemon, setPokemon] = useState({
    img: "",
    name: ""
  });
  useEffect(() => {
    getPokemon().then((res) => {
      setPokemon(res);
    });
  }, []);
  return pokemon;
};

 return App
}