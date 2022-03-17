import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import {RootState} from './src/utils/types';
import {useSelector} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigatior';

const App = () => {
  const {userSession} = useSelector((state: RootState) => state.userReducers);

  return (
    <NavigationContainer>
      {userSession ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
