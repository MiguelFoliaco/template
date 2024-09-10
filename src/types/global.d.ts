// global.d.ts
import react from 'react';
import * as ReactNative from 'react-native';

declare global {
    const React: typeof react
    const RN: typeof ReactNative;
}