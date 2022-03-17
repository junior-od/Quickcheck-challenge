import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../utils/colors';
import {borderSizes, fontSizes, padMarginSizes} from '../utils/sizes';

const {width} = Dimensions.get('screen');

type CustomButtonProps = {
  buttonStyle: StyleProp<ViewStyle>;
  buttonTitleStyle: StyleProp<TextStyle>;
  buttonTitle?: string | '';
  onButtonClicked: () => void;
  disabled?: boolean | false;
};

const CustomButton = ({
  buttonStyle,
  buttonTitleStyle,
  buttonTitle,
  onButtonClicked,
  disabled,
}: CustomButtonProps) => {
  const style = disabled
    ? [styles.buttonStyle, buttonStyle, styles.disabledStyle]
    : [styles.buttonStyle, buttonStyle];
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onButtonClicked}
      style={style}>
      <Text style={[styles.buttonTitle, buttonTitleStyle]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: width / 2.3,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: padMarginSizes.lg,
    paddingEnd: padMarginSizes.lg,
    paddingTop: padMarginSizes.lg,
    paddingBottom: padMarginSizes.lg,
    borderRadius: borderSizes.lg,
  },

  buttonTitle: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
  disabledStyle: {
    opacity: 0.6,
  },
});

export default CustomButton;
