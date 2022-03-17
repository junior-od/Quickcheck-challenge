/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
const loader = require('../assets/lottie/load.json');

type AppLoaderProps = {
  isVisible: boolean;
};

const AppLoader = ({isVisible}: AppLoaderProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={{width: 100, height: 100}}>
          <LottieView source={loader} autoPlay loop resizeMode="cover" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    opacity: 0.9,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoader;
