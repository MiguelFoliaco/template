return function(){
const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }) => {
  return /* @__PURE__ */ React.createElement(
    ReactNativeAuth0.Auth0Provider,
    {
      domain: "dev-tjq60n4lxydu4mez.us.auth0.com",
      clientId: "DJKgs0GDD9iB5xWS8QN7E3VwnJ0ojvzW"
    },
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
        /* @__PURE__ */ React.createElement(Stack.Screen, { name: "feed", component: Home2 })
      )
    )
  );
};
const Home2 = () => {
  return /* @__PURE__ */ React.createElement(RN.Text, null, "Hola mundo");
};

 return App
}