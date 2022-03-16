import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import SignupForm from '../../components/SignupForm';
import DismissKeyoard from '../../components/DismissKeyboard';
import AppHeader from '../../components/AppHeader';
import {createUserTable} from '../../database/Tables';
import {registerUser} from '../../database/DatabaseApi';

type SignupScreenProps = {
  navigation: any;
};

const SignupScreen = ({navigation}: SignupScreenProps) => {
  const proceed = async (
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
  ) => {
    registerUser(firstName, lastName, userName, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // // console.log(firstName+lastName+userName+password);
    // try {
    //   await db
    //     .transaction(async tx => {
    //       await tx.executeSql(
    //         'INSERT INTO Users (FirstName, LastName, UserName, Password) VALUES (?,?,?,?)',
    //         [firstName, lastName, userName, password],
    //       );
    //     })
    //     .then(result => {
    //       console.log(result);
    //     });
    // } catch (error) {
    //   console.log(error + 'jj');
    // }
  };

  useEffect(() => {
    createUserTable();
  }, []);

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
            ListEmptyComponent={<SignupForm proceed={proceed} />}
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
