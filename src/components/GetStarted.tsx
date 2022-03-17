/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {colors} from '../utils/colors';
import {borderSizes} from '../utils/sizes';

const {width} = Dimensions.get('screen');
const buttonWidth = width / 1.2;

type GetStartedProps = {
  containerStyle?: StyleProp<ViewStyle>;
  onSecondButtonClicked: () => void;
  onFirstButtonClicked: () => void;
  firstButtonStyle?: StyleProp<ViewStyle>;
  secondButtonStyle?: StyleProp<ViewStyle>;
  firstButtonTitleStyle?: StyleProp<TextStyle>;
  secondButtonTitleStyle?: StyleProp<TextStyle>;
  firstButtonName?: string | '';
  secondButtonName?: string | '';
};

const GetStarted = ({
  containerStyle,
  onSecondButtonClicked,
  onFirstButtonClicked,
  firstButtonStyle,
  secondButtonStyle,
  firstButtonTitleStyle,
  secondButtonTitleStyle,
  firstButtonName,
  secondButtonName,
}: GetStartedProps) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <CustomButton
        onButtonClicked={onFirstButtonClicked}
        buttonStyle={[
          {
            width: buttonWidth,
            backgroundColor: colors.blue,
            borderRadius: borderSizes.lg,
          },
          firstButtonStyle,
        ]}
        buttonTitle={firstButtonName}
        buttonTitleStyle={[{color: colors.white}, firstButtonTitleStyle]}
      />
      <CustomButton
        onButtonClicked={onSecondButtonClicked}
        buttonStyle={[
          {
            width: buttonWidth,
            borderWidth: 1,
            borderColor: colors.blue,
            backgroundColor: colors.white,
            borderRadius: borderSizes.lg,
          },
          secondButtonStyle,
        ]}
        buttonTitle={secondButtonName}
        buttonTitleStyle={[
          {
            color: colors.blue,
          },
          secondButtonTitleStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default GetStarted;
