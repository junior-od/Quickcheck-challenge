import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import DismissKeyoard from '../../components/DismissKeyboard';
import AppHeader from '../../components/AppHeader';
import SigninForm from '../../components/SigninForm';
import {useDispatch} from 'react-redux';
import {setUserSession} from '../../redux/actions/userActions';

type SigninScreenProps = {
  navigation: any;
};

const SigninScreen = ({navigation}: SigninScreenProps) => {
  const dispatch = useDispatch();

  const backArrowClicked = () => {
    navigation.goBack();
  };

  const proceed = () => {
    dispatch(setUserSession(true));
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
            ListEmptyComponent={<SigninForm proceed={proceed} />}
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

export default SigninScreen;
