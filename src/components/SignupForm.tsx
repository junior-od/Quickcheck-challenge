import React, {useState} from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, padMarginSizes} from '../utils/sizes';
import CustomTextInput from './CustomTextInput';

type SignupProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const SignupForm = ({containerStyle}: SignupProps) => {
  const [firstNameState, setFirstNameState] = useState<string>('');
  const [lastNameState, setLastNameState] = useState<string>('');
  const [userNameState, setUserNameState] = useState<string>('');

  const onFirstNameChanged = (text: any) => {
    setFirstNameState(text);
  };

  const onLastNameChanged = (text: any) => {
    setLastNameState(text);
  };

  const onUserNameChanged = (text: any) => {
    setUserNameState(text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.signupText}>Sign Up</Text>
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
      <CustomTextInput placeholder={'Password'} isPasswordField={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  signupText: {
    color: colors.black,
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
});

export default SignupForm;
