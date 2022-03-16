import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Easing,
  Dimensions,
  Animated,
} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, padMarginSizes, borderSizes} from '../utils/sizes';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';

const {width} = Dimensions.get('screen');
const signUpButtonWidth = width / 1.2;

type SignupProps = {
  containerStyle?: StyleProp<ViewStyle>;
  proceed?: any;
};

const SignupForm = ({containerStyle, proceed}: SignupProps) => {
  let stepAnimatedValue = new Animated.Value(0);

  const [firstNameState, setFirstNameState] = useState<string>('');
  const [lastNameState, setLastNameState] = useState<string>('');
  const [userNameState, setUserNameState] = useState<string>('');
  const [passwordState, setPasswordState] = useState<string>('');

  const onFirstNameChanged = (text: any) => {
    setFirstNameState(text);
  };

  const onLastNameChanged = (text: any) => {
    setLastNameState(text);
  };

  const onUserNameChanged = (text: any) => {
    setUserNameState(text);
  };

  const onPasswordInputChanged = (text: any) => {
    setPasswordState(text);
  };

  useEffect(() => {
    moveStepView(Easing.ease);
  }, []);

  const moveStepView = (easing: any) => {
    Animated.timing(stepAnimatedValue, {
      toValue: 1,
      duration: 500,
      easing,
      useNativeDriver: true,
    }).start();
  };

  const okay = () => {
    proceed(firstNameState, lastNameState, userNameState, passwordState);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.signupText}>Sign Up</Text>
      <Animated.View style={[{}, {transform: [{scale: stepAnimatedValue}]}]}>
        <CustomTextInput
          placeholder={'First Name'}
          hasInputValue={true}
          inputValue={firstNameState}
          nameFieldStyle={{marginTop: padMarginSizes.xl}}
          onTextChanged={onFirstNameChanged}
        />
        <CustomTextInput
          placeholder={'Last Name'}
          hasInputValue={true}
          inputValue={lastNameState}
          nameFieldStyle={{marginTop: padMarginSizes.xl}}
          onTextChanged={onLastNameChanged}
        />
        <CustomTextInput
          placeholder={'User Name'}
          hasInputValue={true}
          inputValue={userNameState}
          nameFieldStyle={{marginTop: padMarginSizes.xl}}
          onTextChanged={onUserNameChanged}
        />
        <CustomTextInput
          nameFieldStyle={{marginTop: padMarginSizes.xl}}
          placeholder={'Password'}
          inputValue={passwordState}
          isPasswordField={true}
          onTextChanged={onPasswordInputChanged}
        />

        <CustomButton
          onButtonClicked={okay}
          buttonStyle={{
            width: signUpButtonWidth,
            backgroundColor: colors.blue,
            marginTop: padMarginSizes.xxxxl,
            borderRadius: borderSizes.lg,
          }}
          buttonTitle={'Sign Up'}
          buttonTitleStyle={{color: colors.white}}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  signupText: {
    marginTop: padMarginSizes.xl,
    color: colors.black,
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
});

export default SignupForm;
