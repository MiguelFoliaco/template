// global.d.ts
import react from "react";
import * as ReactNative from "react-native";
import * as RNS from "@react-navigation/native-stack";
import * as RNV from "@react-navigation/native";
import * as RA0 from "react-native-auth0";

const _screen = ReactNative.Dimensions.get("screen");
declare global {
  const React: typeof react;
  const RN: typeof ReactNative;
  const ReactNavigationStack: typeof RNS;
  const ReactNavigation: typeof RNV;
  const useProps: (key: string) => Record<string, any>;
  const StatusBar: typeof ReactNative.StatusBar;
  const ThemeProvider: typeof RNV.ThemeProvider;
  const screen: typeof _screen, window: typeof _screen;
  const ReactNativeAuth0: typeof RA0;
}
