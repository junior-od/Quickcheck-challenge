import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

type DismissKeyboardProps = {
  children: JSX.Element | JSX.Element[];
};

const DismissKeyoard = ({children}: DismissKeyboardProps) => {
  const dis = () => Keyboard.dismiss();
  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'android' ? 20 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={dis}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default DismissKeyoard;
