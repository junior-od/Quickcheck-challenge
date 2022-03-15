import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {PlatformOSType} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {Fonts} from 'react-native-paper/lib/typescript/types';
import FlashMessage from 'react-native-flash-message';
import Store from './src/redux/store';

const fontConfig: {
  [platform in PlatformOSType | 'default']?: Fonts;
} = {
  ios: {
    regular: {
      fontFamily: 'NunitoSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'NunitoSans-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'NunitoSans-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'NunitoSans-ExtraLight',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'NunitoSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'NunitoSans-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'NunitoSans-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'NunitoSans-ExtraLight',
      fontWeight: 'normal',
    },
  },
};

const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const RootApp = () => {
  return (
    <Provider store={Store}>
      <PaperProvider theme={theme}>
        <App />
        <FlashMessage position="top" />
      </PaperProvider>
    </Provider>
  );
};

export default RootApp;
