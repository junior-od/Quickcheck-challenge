import React, {useMemo, useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import {fontSizes, padMarginSizes} from '../utils/sizes';
import {colors} from '../utils/colors';
import {getStory} from '../apis/HnApi';

type SingleStoryItemProps = {
  item?: any;
  onItemClicked?: any;
};

const SingleStoryItem = ({item, onItemClicked}: SingleStoryItemProps) => {
  const [story, setStory] = useState<any>(null);
  const subscribeToCall = useRef<boolean>(true);

  useEffect(() => {
    if (subscribeToCall.current) {
      getStory(item)
        .then(res => {
          if (res && subscribeToCall.current) {
            setStory(res);
          }
        })
        .catch(_err => {});
    }

    return () => {
      subscribeToCall.current = false;
    };
  }, []);
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
          loading={!story}>
          <View style={styles.innerContainer}>
            <Text>{story ? story.title : ''}</Text>
          </View>
        </ContentLoader>
      </TouchableOpacity>
    );
  }, [story]);

  return listComp;
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: padMarginSizes.xl,
    paddingEnd: padMarginSizes.xl,
    marginTop: padMarginSizes.lg,
    marginBottom: padMarginSizes.md,
  },

  contentLoaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SingleStoryItem;
