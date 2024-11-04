// global.d.ts
import react from "react";
import * as ReactNative from "react-native";
import * as RNS from "@react-navigation/native-stack";
import * as RNV from "@react-navigation/native";
import * as RA0 from "react-native-auth0";
import * as Shopify from "@shopify/shopify-api";
import * as RB from "native-base";
import * as RBSVG from "react-native-svg";
import * as St from "react-native-mmkv-storage";
import * as Z from "zustand";
import * as ZM from "zustand/middleware";

const _screen = ReactNative.Dimensions.get("screen");
declare global {
  const React: typeof react;
  const RN: typeof ReactNative;
  const ReactNavigationStack: typeof RNS;
  const ReactNavigation: typeof RNV;
  const useProps: <T = Record<string, any>>(key: string) => T;
  const StatusBar: typeof ReactNative.StatusBar;
  const ThemeProvider: typeof RNV.ThemeProvider;
  const screen: typeof _screen, window: typeof _screen;
  const ReactNativeAuth0: typeof RA0;
  const ShopifyShopifyApi: typeof Shopify;
  const NativeBase: typeof RB;
  const ReactNativeSvg: typeof RBSVG;
  const storage: typeof St.MMKVInstance;
  const Storage: typeof St;
  const Zustand: typeof Z;
  const ZustandMiddleware: typeof ZM;
}
