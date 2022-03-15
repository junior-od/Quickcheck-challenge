/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fontSizes, padMarginSizes} from '../../utils/sizes';
import CustomStatusBar from '../../components/CustomStatusBar';
import Logo from '../../components/Logo';
import GetStarted from '../../components/GetStarted';
import {navigationConstants} from '../../utils/navigationConstants';

type OnboardingScreenProps = {
  navigation: any;
};

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {

  const onSignInClicked = () => {

  };

  const onSignUpClicked = () => {
    navigation.navigate(navigationConstants.signUp);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <View style={styles.innerContainer}>
        <Logo containerStyle={{flex: 0.5}} />
        <View style={styles.textContainerStyle}>
          <Text style={styles.discoverText}>
            Discover latest{'\n'}news and stories today
          </Text>
        </View>
        <GetStarted
          containerStyle={{flex: 0.2}}
          onSecondButtonClicked={onSignInClicked}
          onFirstButtonClicked={onSignUpClicked}
          firstButtonName={'Sign Up'}
          secondButtonName={'Sign In'}
        />
      </View>
    </SafeAreaView>
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
    paddingStart: padMarginSizes.xl,
  },

  textContainerStyle: {
    flex: 0.2,
    alignItems: 'center',
  },

  discoverText: {
    color: colors.black,
    fontSize: fontSizes.xl,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
