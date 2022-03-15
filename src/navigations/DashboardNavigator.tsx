import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../screens/Dashboard/NewsScreen';
import AboutScreen from '../screens/Dashboard/AboutScreen';
import {colors} from '../utils/colors';
import {navigationConstants} from '../utils/navigationConstants';

const DashboardTab = createBottomTabNavigator();

type DashboardNavigatorProps = {
  navigation?: any;
};

const DashboardNavigator = ({navigation}: DashboardNavigatorProps) => {
  return (
    <DashboardTab.Navigator
      screenOptions={({route}) => ({
        style: styles.barStyle,
        lazy: true,
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.fieldInputNameColor,
      })}
      backBehavior="none">
      <DashboardTab.Screen
        name={navigationConstants.dashboard.news}
        component={NewsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/img/house-2.svg')} />
            ) : (
              <Image source={require('../assets/img/house-2-grey.svg')} />
            ),
        }}
      />
      <DashboardTab.Screen
        name={navigationConstants.dashboard.about}
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/img/house-2.svg')} />
            ) : (
              <Image source={require('../assets/img/house-2-grey.svg')} />
            ),
        }}
      />
    </DashboardTab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.white,
  },
});

export default DashboardNavigator;
