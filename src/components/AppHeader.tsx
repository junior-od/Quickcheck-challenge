/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, padMarginSizes} from '../utils/sizes';

const defaultIconSource = require('../assets/img/arrow-left.svg');

type AppHeaderProps = {
  headingTitle?: string;
  backArrowClicked?: () => void;
  backAndTitleContainerStyle?: StyleProp<ViewStyle>;
  appHeaderStyle?: StyleProp<ViewStyle>;
  headingTitleStyle?: StyleProp<TextStyle>;
  showBackArrow?: boolean | true;
  showHeaderTitle?: boolean | true;
  iconSource?: NodeRequire | null;
};

const AppHeader = ({
  headingTitle,
  backArrowClicked,
  backAndTitleContainerStyle,
  appHeaderStyle,
  headingTitleStyle,
  showBackArrow = true,
  showHeaderTitle = true,
  iconSource,
}: AppHeaderProps) => {
  return (
    <View style={[styles.mainContainer, appHeaderStyle]}>
      <View
        style={[styles.backAndTitleContainerStyle, backAndTitleContainerStyle]}>
        {showBackArrow ? (
          <TouchableOpacity
            style={styles.backContainer}
            onPress={backArrowClicked}>
            <Image
              style={styles.backArrow}
              source={iconSource ? iconSource : defaultIconSource}
            />
          </TouchableOpacity>
        ) : null}
        {showHeaderTitle ? (
          <View style={styles.heading}>
            <Text style={[styles.headingTitle, headingTitleStyle]}>
              {headingTitle}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backAndTitleContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoContainerStyle: {
    marginRight: padMarginSizes.xl,
    marginTop: padMarginSizes.xl,
  },

  backContainer: {
    marginLeft: padMarginSizes.xl,
    marginTop: padMarginSizes.xl,
    width: padMarginSizes.xxl,
    height: padMarginSizes.xxl,
  },

  backArrow: {
    width: padMarginSizes.xxl,
    height: padMarginSizes.xxl,
  },

  heading: {
    marginLeft: padMarginSizes.xl,
    marginTop: padMarginSizes.xl,
  },

  headingTitle: {
    fontSize: fontSizes.hd,
    color: colors.black,
  },

  cooperativeNameStyle: {
    fontSize: fontSizes.md,
    color: colors.black,
    alignSelf: 'center',
  },
});

export default AppHeader;
