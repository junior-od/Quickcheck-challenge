import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {padMarginSizes} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import DismissKeyoard from '../../components/DismissKeyboard';
import {createUserTable} from '../../database/Tables';
import AppHeader from '../../components/AppHeader';
import SigninForm from '../../components/SigninForm';
import {useDispatch} from 'react-redux';
import {setUserSession} from '../../redux/actions/userActions';
import {showMessage} from 'react-native-flash-message';
import AppLoader from '../../components/AppLoader';
import {database} from '../../database/Database';

type SigninScreenProps = {
  navigation: any;
};

const SigninScreen = ({navigation}: SigninScreenProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const backArrowClicked = () => {
    navigation.goBack();
  };

  useEffect(() => {
    createUserTable();
  }, []);

  const checkIfUserCredExists = (userName: string, password: string) => {
    setLoading(true);
    database.transaction((txn: any) => {
      txn.executeSql(
        'SELECT * FROM users where username =(?) AND password =(?)',
        [userName, password],
        (_sqlTxn: any, res: any) => {
          // console.log('categories retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            setLoading(false);
            //login user
            dispatch(setUserSession(true));
          } else {
            //
            setLoading(false);
            showMessage({
              description: 'invalid username or password',
              message: 'Error',
              icon: 'danger',
              type: 'danger',
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

  const proceed = (userName: string, password: string) => {
    if (userName.length > 0 && password.length > 0) {
      checkIfUserCredExists(userName, password);
    } else {
      showMessage({
        description: 'All fields are required',
        message: 'Error',
        icon: 'danger',
        type: 'danger',
      });
    }
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

export default SigninScreen;
