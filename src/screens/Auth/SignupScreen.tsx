import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import SignupForm from '../../components/SignupForm';
import DismissKeyoard from '../../components/DismissKeyboard';
import AppHeader from '../../components/AppHeader';

type SignupScreenProps = {
  navigation: any;
};

const SignupScreen = ({navigation}: SignupScreenProps) => {
  const backArrowClicked = () => {
    navigation.goBack();
  };

  return (
    <DismissKeyoard>
      <SafeAreaView style={styles.mainContainer}>
        <CustomStatusBar />
        <AppHeader
          backArrowClicked={backArrowClicked}
          showHeaderTitle={false}
          showBackArrow={true}
        />
        <View style={styles.innerContainer}>
          <FlatList
            data={[]}
            renderItem={() => null}
            ListEmptyComponent={<SignupForm />}
          />
        </View>
      </SafeAreaView>
    </DismissKeyoard>
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
