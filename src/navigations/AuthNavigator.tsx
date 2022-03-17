import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationConstants} from '../utils/navigationConstants';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import SigninScreen from '../screens/Auth/SignInScreen';

const AuthStack = createNativeStackNavigator();

type AuthNavigatorProps = {
  navigation?: any;
};

const AuthNavigator = ({navigation}: AuthNavigatorProps) => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={navigationConstants.onboarding}
        component={OnboardingScreen}
      />
      <AuthStack.Screen
        name={navigationConstants.signUp}
        component={SignupScreen}
      />
      <AuthStack.Screen
        name={navigationConstants.signIn}
        component={SigninScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
