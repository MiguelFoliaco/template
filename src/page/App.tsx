import React from "react";
import { ColorSchemeName } from "react-native";
import { Home } from "./Home";

const Stack = ReactNavigationStack.createNativeStackNavigator();
const App = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    // <ReactNativeAuth0.Auth0Provider
    //   domain={"dev-tjq60n4lxydu4mez.us.auth0.com"}
    //   clientId={"DJKgs0GDD9iB5xWS8QN7E3VwnJ0ojvzW"}
    // >
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
    // </ReactNativeAuth0.Auth0Provider>
  );
};
