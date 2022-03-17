import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../utils/navigationConstants';
import DashboardNavigator from './DashboardNavigator';

const AppNav = createNativeStackNavigator();

type AppNavigatorProps = {
  navigation?: any;
};

const AppNavigator = ({navigation}: AppNavigatorProps) => {
  return (
    <AppNav.Navigator screenOptions={{headerShown: false}}>
      <AppNav.Screen
        name={navigationConstants.dashboard.home}
        component={DashboardNavigator}
      />
    </AppNav.Navigator>
  );
};

export default AppNavigator;
