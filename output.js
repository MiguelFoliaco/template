return function(){
const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }) => {
  return /* @__PURE__ */ React.createElement(
    ThemeProvider,
    {
      value: colorScheme === "dark" ? ReactNavigation.DarkTheme : ReactNavigation.DefaultTheme
    },
    /* @__PURE__ */ React.createElement(
      Stack.Navigator,
      {
        initialRouteName: "/feed",
        screenOptions: {
          headerShown: false
        }
      },
      /* @__PURE__ */ React.createElement(Stack.Screen, { name: "feed", component: Home })
    )
  );
};
const Home = () => {
  const { notes } = useNotes();
  return /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        paddingVertical: 20,
        paddingHorizontal: 20
      }
    },
    /* @__PURE__ */ React.createElement(
      RN.View,
      {
        style: {
          flexDirection: "row",
          justifyContent: "space-between"
        }
      },
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 15, letterSpacing: 2 } }, "Tus Notas"),
      /* @__PURE__ */ React.createElement(RN.TouchableOpacity, null, /* @__PURE__ */ React.createElement(RN.Text, { style: { color: "#FFFFFF", letterSpacing: 2 } }, "Crear Nota +"))
    ),
    /* @__PURE__ */ React.createElement(
      RN.View,
      {
        style: {
          marginVertical: 30,
          borderTopColor: "#dbdbdb",
          borderTopWidth: 1,
          borderBottomColor: "#dbdbdb",
          borderBottomWidth: 1,
          borderStyle: "solid",
          paddingVertical: 15,
          paddingHorizontal: 30
        }
      },
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 70, color: "white", letterSpacing: 2 } }, "Tus"),
      /* @__PURE__ */ React.createElement(
        RN.Text,
        {
          style: {
            fontSize: 70,
            marginTop: 10,
            alignSelf: "flex-end",
            color: "white",
            letterSpacing: 2
          }
        },
        "Notas"
      )
    ),
    /* @__PURE__ */ React.createElement(RN.View, null, notes.length > 0 ? notes.map((e) => /* @__PURE__ */ React.createElement(CardNote, { key: `${e.title}-${e.id}` })) : /* @__PURE__ */ React.createElement(
      RN.TouchableOpacity,
      {
        style: {
          margin: 20,
          backgroundColor: "#ff7930",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 2
        }
      },
      /* @__PURE__ */ React.createElement(
        RN.Text,
        {
          style: { fontSize: 20, letterSpacing: 2, fontWeight: "bold" }
        },
        "Crear una nota +"
      )
    ))
  );
};
const useNotes = Zustand.create((set) => ({
  notes: [],
  setNote: (data) => set({ noteSelected: data }),
  setNotes: (data) => set({ notes: data })
}));
const CardNote = () => {
  return /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        padding: 10,
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderStyle: "solid"
      }
    },
    /* @__PURE__ */ React.createElement(
      RN.View,
      {
        style: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 13, letterSpacing: 2 } }, "01/"),
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 23, color: "white", letterSpacing: 2 } }, "Title Notes"),
      /* @__PURE__ */ React.createElement(RN.Text, { style: { fontSize: 13 } }, "Edit")
    ),
    /* @__PURE__ */ React.createElement(RN.View, { style: { padding: 20 } }, /* @__PURE__ */ React.createElement(RN.Text, { style: { letterSpacing: 2, fontSize: 14 } }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, in nemo earum vitae quod ex hic debitis."))
  );
};

 return App
}