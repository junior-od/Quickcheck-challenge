import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import {borderSizes, fontSizes, padMarginSizes} from '../utils/sizes';

type CustomTextInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  nameFieldStyle?: StyleProp<TextStyle>;
  mode?: 'flat';
  maxLength?: number;
  placeholder?: string;
  selectionColor?: string;
  editable?: boolean;
  textColor?: string;
  underlineWhenFocused?: string;
  onTextChanged?: any;
  disabled?: boolean;
  isPasswordField?: boolean;
  showNameField?: boolean;
  textRef?: any;
  secureField?: boolean;
  inputValue?: string;
  hasInputValue?: boolean;
};

const CustomTextInput = ({
  containerStyle,
  keyboardType = 'default',
  multiline = false,
  inputStyle = {},
  nameFieldStyle = {},
  mode = 'flat',
  maxLength = 150,
  placeholder,
  secureField = false,
  selectionColor = colors.black,
  editable = true,
  textColor = colors.black,
  underlineWhenFocused = 'transparent',
  onTextChanged,
  textRef,
  disabled = false,
  isPasswordField = false,
  showNameField = true,
  inputValue = '',
  hasInputValue = false,
}: CustomTextInputProps) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordIconName, setPasswordIconName] = useState('eye');

  const passwordHide = () => {
    setPasswordHidden(!passwordHidden);
    setPasswordIconName(passwordHidden ? 'eye-off' : 'eye');
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {showNameField ? (
        <Text style={[styles.nameFieldStyle, nameFieldStyle]}>
          {placeholder}
        </Text>
      ) : null}
      {isPasswordField ? (
        <TextInput
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          onChangeText={onTextChanged}
          underlineColor={underlineWhenFocused}
          theme={{colors: {text: textColor, primary: underlineWhenFocused}}}
          style={[styles.textField, inputStyle]}
          mode={mode}
          value={inputValue}
          secureTextEntry={passwordHidden}
          selectionColor={selectionColor}
          placeholder={placeholder}
          placeholderTextColor={colors.fieldInputPlaceholderColor}
          editable={editable}
          disabled={disabled}
          ref={textRef}
          right={
            <TextInput.Icon name={passwordIconName} onPress={passwordHide} />
          }
        />
      ) : hasInputValue ? (
        <TextInput
          secureTextEntry={secureField}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          value={inputValue}
          onChangeText={onTextChanged}
          underlineColor={underlineWhenFocused}
          theme={{colors: {text: textColor, primary: underlineWhenFocused}}}
          style={[styles.textField, inputStyle]}
          mode={mode}
          selectionColor={selectionColor}
          placeholder={placeholder}
          placeholderTextColor={colors.fieldInputPlaceholderColor}
          editable={editable}
          disabled={disabled}
          ref={textRef}
        />
      ) : (
        <TextInput
          secureTextEntry={secureField}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          onChangeText={onTextChanged}
          underlineColor={underlineWhenFocused}
          theme={{colors: {text: textColor, primary: underlineWhenFocused}}}
          style={[styles.textField, inputStyle]}
          mode={mode}
          selectionColor={selectionColor}
          placeholder={placeholder}
          placeholderTextColor={colors.fieldInputPlaceholderColor}
          editable={editable}
          disabled={disabled}
          ref={textRef}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
  nameFieldStyle: {
    fontSize: fontSizes.md,
    color: colors.fieldInputNameColor,
  },

  textField: {
    height: 56,
    borderWidth: 1,
    borderColor: colors.fieldInputBorderColor,
    borderTopLeftRadius: borderSizes.lg,
    borderTopRightRadius: borderSizes.lg,
    borderBottomEndRadius: borderSizes.lg,
    borderBottomLeftRadius: borderSizes.lg,
    fontSize: fontSizes.lg,
    marginTop: padMarginSizes.md,
    backgroundColor: colors.fieldInputColor,
  },
});

export default CustomTextInput;
