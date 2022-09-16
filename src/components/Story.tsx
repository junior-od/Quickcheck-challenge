import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import { borderSizes, padMarginSizes, fontSizes } from '../utils/sizes';
import {colors} from '../utils/colors';

type SingleStoryItemProps = {
  item?: any;
  onItemClicked?: any;
  isDataListVisible: boolean;
};

const SingleStoryItem = ({item, onItemClicked, isDataListVisible}: SingleStoryItemProps) => {

  const listComp = useMemo(() => {
    return (
      <TouchableOpacity onPress={onItemClicked}>
        <ContentLoader
          containerStyles={styles.contentLoaderStyle}
          active
          title
          titleStyles={{
            marginTop: padMarginSizes.md,
            marginBottom: padMarginSizes.md,
          }}
          paragraphStyles={{
            marginBottom: padMarginSizes.md,
          }}
          pRows={1}
          aSize={50}
          loading={isDataListVisible}>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}>{item.title}</Text>
          </View>
        </ContentLoader>
      </TouchableOpacity>
    );
  }, [isDataListVisible]);

  return listComp;
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: padMarginSizes.xl,
    marginTop: padMarginSizes.lg,
    marginBottom: padMarginSizes.md,
    backgroundColor: colors.white,
    borderRadius: borderSizes.lg,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
      },
    }),

  },

  contentLoaderStyle: {
    paddingLeft: padMarginSizes.xl,
    paddingRight: padMarginSizes.xl,
    marginTop: padMarginSizes.md,
    backgroundColor: colors.white,
    borderRadius: borderSizes.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
      },
    }),
  },

  textStyle: {
    color: colors.black,
    fontSize: fontSizes.hd,
  },
});

export default SingleStoryItem;
