import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../utils/colors';
import AppHeader from '../../components/AppHeader';
import {padMarginSizes} from '../../utils/sizes';
import CustomStatusBar from '../../components/CustomStatusBar';
import {getTopStoryIds} from '../../apis/HnApi';
import SingleStoryItem from '../../components/Story';

type NewsScreenProps = {
  navigation: any;
};

const NewsScreen = ({navigation}: NewsScreenProps) => {
  const storyIds = useRef<any>([]);
  const [capturedIds, setCapturedIds] = useState<any>([]);
  const page = useRef<number>(1);
  const pageSize = 10;

  const paginate = (array: any, size: number, pageNumber: number) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const getTotalPages = (array: any, size: number): number => {
    return Math.ceil(array.length / size);
  };

  const loadMore = () => {
    setTimeout(() => {
      if (page.current <= getTotalPages(storyIds.current, pageSize)) {
        setCapturedIds([
          ...capturedIds,
          ...paginate(storyIds.current, pageSize, page.current),
        ]);
        page.current = page.current + 1;
      }
    }, 1000);
  };

  useEffect(() => {
    getTopStoryIds()
      .then(res => {
        if (res) {
          storyIds.current = res;
          //   console.log(getTotalPages(storyIds.current, pageSize));
          setCapturedIds(paginate(storyIds.current, pageSize, page.current));
          page.current = page.current + 1;
        }
      })
      .catch(_err => {
        //console.log(err);
      });
  }, []);

  const itemsToDisplay = ({item, index, separators}) => {
    return <SingleStoryItem item={item} key={item} />;
  };

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
        <FlatList
          data={capturedIds}
          renderItem={itemsToDisplay}
          keyExtractor={item => item}
          initialScrollIndex={0}
          initialNumToRender={5}
          updateCellsBatchingPeriod={5}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={500}
          onEndReached={loadMore}
        />
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
