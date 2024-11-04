import React from "react";
import { ColorSchemeName } from "react-native";
import { Home } from "./Home";

const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <ThemeProvider
      value={
        colorScheme === "dark"
          ? ReactNavigation.DarkTheme
          : ReactNavigation.DefaultTheme
      }
    >
      <Stack.Navigator
        initialRouteName="/feed"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="feed" component={Home} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};
