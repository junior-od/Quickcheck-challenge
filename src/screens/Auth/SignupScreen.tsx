import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import SignupForm from '../../components/SignupForm';

type SignupScreenProps = {
  navigation: any;
};

const SignupScreen = ({navigation}: SignupScreenProps) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <View style={styles.innerContainer}>
        <SignupForm />
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
});

export default SignupScreen;
