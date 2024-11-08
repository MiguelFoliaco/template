return function(){
const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }) => {
  return (
    // <ReactNativeAuth0.Auth0Provider
    //   domain={"dev-tjq60n4lxydu4mez.us.auth0.com"}
    //   clientId={"DJKgs0GDD9iB5xWS8QN7E3VwnJ0ojvzW"}
    // >
    /* @__PURE__ */ React.createElement(
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
    )
  );
};
const Home = () => {
  return /* @__PURE__ */ React.createElement(
    RN.View,
    {
      style: {
        paddingVertical: 20,
        paddingHorizontal: 30
      }
    },
    /* @__PURE__ */ React.createElement(
      RN.View,
      {
        style: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 20,
          borderBottomColor: "#FFFFFF",
          borderBottomWidth: 1,
          borderStyle: "solid"
        }
      },
      /* @__PURE__ */ React.createElement(RN.Text, null, "Tus Notas"),
      /* @__PURE__ */ React.createElement(RN.TouchableOpacity, null, /* @__PURE__ */ React.createElement(RN.Text, null, "Crear Nota"))
    )
  );
};

 return App
}