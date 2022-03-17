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
const signinButtonWidth = width / 1.2;

type SigninProps = {
  containerStyle?: StyleProp<ViewStyle>;
  proceed?: any;
};

const SigninForm = ({containerStyle, proceed}: SigninProps) => {
  let stepAnimatedValue = new Animated.Value(0);

  const [userNameState, setUserNameState] = useState<string>('');
  const [passwordState, setPasswordState] = useState<string>('');

  const onUserNameChanged = (text: any) => {
    setUserNameState(text);
  };

  const onPasswordInputChanged = (text: any) => {
    setPasswordState(text);
  };

  const okay = () => {
    proceed(userNameState, passwordState);
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

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.signupText}>Sign In</Text>
      <Animated.View style={[{}, {transform: [{scale: stepAnimatedValue}]}]}>
        <CustomTextInput
          placeholder={'User Name'}
          hasInputValue={true}
          inputValue={userNameState}
          nameFieldStyle={{marginTop: padMarginSizes.xxxxl}}
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
            width: signinButtonWidth,
            backgroundColor: colors.blue,
            marginTop: padMarginSizes.xxxxl,
            borderRadius: borderSizes.lg,
          }}
          buttonTitle={'Sign In'}
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

export default SigninForm;
