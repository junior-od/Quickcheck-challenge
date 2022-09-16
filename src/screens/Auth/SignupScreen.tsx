import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import SignupForm from '../../components/SignupForm';
import DismissKeyoard from '../../components/DismissKeyboard';
import AppHeader from '../../components/AppHeader';
import {createUserTable} from '../../database/Tables';
import {registerUser} from '../../database/DatabaseApi';
import {database} from '../../database/Database';
import {showMessage} from 'react-native-flash-message';
import AppLoader from '../../components/AppLoader';

type SignupScreenProps = {
  navigation: any;
};

const SignupScreen = ({navigation}: SignupScreenProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const renderItem = () => null;

  const checkIfUserExists = (
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
  ) => {
    setLoading(true);
    database.transaction((txn: any) => {
      txn.executeSql(
        `SELECT * FROM users where username =(?)`,
        [userName],
        (_sqlTxn: any, res: any) => {
          // console.log('categories retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            setLoading(false);
            showMessage({
              description: 'user name exists',
              message: 'Error',
              icon: 'danger',
              type: 'danger',
            });
          } else {
            registerUser(firstName, lastName, userName, password)
              .then(_res => {
                setLoading(false);
                showMessage({
                  description: 'Signed Up successfully',
                  message: 'Success',
                  icon: 'success',
                  type: 'success',
                });
                navigation.goBack();
              })
              .catch(_err => {
                setLoading(false);
                showMessage({
                  description: 'registration failed',
                  message: 'Error',
                  icon: 'danger',
                  type: 'danger',
                });
              });
          }
        },
        (_error: any) => {
          setLoading(false);
          showMessage({
            description: 'something went wrong',
            message: 'Error',
            icon: 'danger',
            type: 'danger',
          });
        },
      );
    });
  };

  const proceed = (
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
  ) => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      userName.length > 0 &&
      password.length > 0
    ) {
      checkIfUserExists(firstName, lastName, userName, password);
    } else {
      showMessage({
        description: 'All fields are required',
        message: 'Error',
        icon: 'danger',
        type: 'danger',
      });
    }
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
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<SignupForm proceed={proceed} />}
          />
        </View>
        <AppLoader isVisible={isLoading} />
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
