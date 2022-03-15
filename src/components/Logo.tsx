import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

const loader = require('../assets/lottie/app-logo.json');

type LogoProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const Logo = ({containerStyle}: LogoProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <LottieView source={loader} autoPlay loop resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Logo;
