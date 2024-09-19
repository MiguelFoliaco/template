import React from "react";
import { Home } from "./Home";
import { ColorSchemeName } from "react-native";
import { ProviderPokemon } from "./context/PokemonContext";
import { PokePage } from "./PokePage";

const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <ReactNativeAuth0.Auth0Provider
      domain={"dev-tjq60n4lxydu4mez.us.auth0.com"}
      clientId={"DJKgs0GDD9iB5xWS8QN7E3VwnJ0ojvzW"}
    >
      <ThemeProvider
        value={
          colorScheme === "dark"
            ? ReactNavigation.DarkTheme
            : ReactNavigation.DefaultTheme
        }
      >
        <ProviderPokemon>
          <Stack.Navigator
            initialRouteName="/feed"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="feed" component={Home} />
            <Stack.Screen name="poke-page" component={PokePage} />
          </Stack.Navigator>
        </ProviderPokemon>
      </ThemeProvider>
    </ReactNativeAuth0.Auth0Provider>
  );
};
