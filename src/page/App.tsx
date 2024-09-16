import React from "react";
import { Home } from "./Home";
import { ColorSchemeName } from "react-native";
import { ProviderPokemon } from "./context/PokemonContext";
import { PokePage } from "./PokePage";

const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <>
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
    </>
  );
};
