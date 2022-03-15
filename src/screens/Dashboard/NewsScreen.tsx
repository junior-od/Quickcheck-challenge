import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import AppHeader from '../../components/AppHeader';
import {fontSizes, padMarginSizes} from '../../utils/sizes';
import CustomStatusBar from '../../components/CustomStatusBar';

type NewsScreenProps = {
  navigation: any;
};

const NewsScreen = ({navigation}: NewsScreenProps) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomStatusBar />
      <AppHeader
        appHeaderStyle={{marginBottom: padMarginSizes.xl}}
        showBackArrow={false}
        showHeaderTitle={true}
        headingTitle={'News'}
      />
      <View style={styles.innerContainer}>
          

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  innerContainer: {
    flex: 1,
    paddingEnd: padMarginSizes.xl,
    paddingStart: padMarginSizes.xl,
  },
});

export default NewsScreen;
