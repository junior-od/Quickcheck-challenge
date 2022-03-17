import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {colors} from '../utils/colors';

const CustomStatusBar = () => {
  return (
    <StatusBar
      barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      backgroundColor={colors.white}
    />
  );
};

export default CustomStatusBar;
