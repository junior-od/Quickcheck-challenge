/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import { padMarginSizes, fontSizes, borderSizes } from '../../utils/sizes';
import CustomStatusBar from '../../components/CustomStatusBar';
import AutoTypingText from 'react-native-auto-typing-text';

type AboutScreenProps = {
  navigation: any;
};

const AboutScreen = ({navigation}: AboutScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <CustomStatusBar />
      <Image style={{position: 'absolute', height: '30%'}} source={require('../../assets/img/d.jpg')}  />

      <View style={styles.innerContainer}>
      <Image
          source={require('../../assets/img/ope.png')}
          style={styles.imgStyle}
        />

        <AutoTypingText
          text={'My name is Opeyemi Oduberu. I am a react native developer.'}
          charMovingTime={80}
          delay={0}
          style={{
            fontSize: fontSizes.hd,
            color: 'rgba(0,0,0,0.7)',
            backgroundColor: 'rgba(0,0,0,0)',
            margin: padMarginSizes.lg,
          }}
          onComplete={() => {
            //
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  innerContainer: {
    flex: 1,
    paddingEnd: padMarginSizes.xl,
  },

  imgStyle: {
    marginTop: '48%',
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});

export default AboutScreen;
