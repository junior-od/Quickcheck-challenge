import React, {useEffect, useState, useRef, useCallback} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, ImageBackground, Image, Linking} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {colors} from '../../utils/colors';
import AppHeader from '../../components/AppHeader';
import {padMarginSizes} from '../../utils/sizes';
import CustomStatusBar from '../../components/CustomStatusBar';
import {getStory, getTopStoryIds} from '../../apis/HnApi';
import SingleStoryItem from '../../components/Story';
import LottieView from 'lottie-react-native';
import { mockData } from '../../utils/constants';

type NewsScreenProps = {
  navigation: any;
};

const loader = require('../../assets/lottie/load.json');

const NewsScreen = ({navigation}: NewsScreenProps) => {
  const ITEM_HEIGHT = 10; // fixed height of item component
  const getItemLayout = (data: any, index: any) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  const [pullDownRefresh, setPullDownRefresh] = useState<boolean>(false);
  const storyIds = useRef<any>([]);
  const subscribeToScreen = useRef<boolean>(true);
  const [isDataListVisible, setDataListVisible] = useState<boolean>(true);
  const [capturedIds, setCapturedIds] = useState<any[]>([]);
  const [isExtraDataLoading, setExtraDataLoading] = useState<boolean>(false);
  const page = useRef<number>(1);
  const pageSize = 20;
  const totalPages = useRef<number>(1);

  useFocusEffect(
    useCallback(() => {
      subscribeToScreen.current = true;
    }, []),
  );


  const keyExtracting = (item: any, index: any) => {
    return index;
  };

  const paginate = (array: any, size: number, pageNumber: number): any[] => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const getTotalPages = (array: any, size: number): number => {
    return Math.ceil(array.length / size);
  };

  const loadMore = () => {
    subscribeToScreen.current = true;
    setExtraDataLoading(true);
    setTimeout(() => {
      if (page.current <= totalPages.current) {
       
        let stuff = paginate(storyIds.current, pageSize, page.current).map((item: any) => {
          return getStory(item)
          }
        );
        
        Promise.all(stuff).then(res => {
          if (subscribeToScreen.current){
            setCapturedIds([...capturedIds, ...res])
            setExtraDataLoading(false);
            page.current = page.current + 1;
          }

        }).catch(_err => {
          if(subscribeToScreen.current){
            setExtraDataLoading(false);
          }
          
        });
        
      } else {
        if(subscribeToScreen.current){
          setExtraDataLoading(false);
        }
      }
    }, 5000);
  };

  const refreshList = () => {
   
    subscribeToScreen.current = true;
    getTopStoryIds()
    .then(res => {
      if (subscribeToScreen.current){
        setDataListVisible(false);
      }

      if (res) {
        storyIds.current = res;
        
        totalPages.current = getTotalPages(storyIds.current, pageSize);
        let stuff = paginate(storyIds.current, pageSize, 1).map((item: any) => {
          return getStory(item)
          }
        );
        
        Promise.all(stuff).then(res => {
          if (subscribeToScreen.current){
            setCapturedIds(res);
            page.current = 2;
          }

        }).catch(err => {
          //
        });
      }
    })
    .catch(_err => {
      if (subscribeToScreen.current){
        setDataListVisible(false);
      }
      //
    });

  };

  useEffect(() => {
    subscribeToScreen.current = true;
    getTopStoryIds()
      .then(res => {
        if (subscribeToScreen.current){
          setDataListVisible(false);
        }

        if (res) {
          storyIds.current = res;
          
          totalPages.current = getTotalPages(storyIds.current, pageSize);
          let stuff = paginate(storyIds.current, pageSize, 1).map((item: any) => {
            return getStory(item)
            }
          );
          
          Promise.all(stuff).then(res => {
            if (subscribeToScreen.current){
              setCapturedIds(res)
              page.current = 2;
            }

          }).catch(err => {
            //
            
          });
        }
      })
      .catch(_err => {
        if (subscribeToScreen.current){
          setDataListVisible(false);
        }
        //
      });

      return () => {
        subscribeToScreen.current = false;
      };
  }, []);

  const clicked = async (item: any) => { 
    if (item.url){
      await Linking.openURL(item.url);
    }
  };

  const itemsToDisplay = ({item, _index, _separators}: any) => {
    return <SingleStoryItem item={item} key={item} isDataListVisible={isDataListVisible} onItemClicked={() => clicked(item)} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image style={{position: 'absolute', height: '30%'}} source={require('../../assets/img/d.jpg')}  />
      <CustomStatusBar />
      <AppHeader
        appHeaderStyle={{marginBottom: padMarginSizes.xl}}
        showBackArrow={false}
        showHeaderTitle={true}
        headingTitleStyle={{ color: colors.white }}
        headingTitle={'Latest News'}
      />
      <View style={styles.innerContainer}>
        <FlatList
          data={capturedIds.length === 0 ? mockData : capturedIds}
          renderItem={itemsToDisplay}
          getItemLayout={getItemLayout}
          keyExtractor={keyExtracting}
          onRefresh={refreshList}
          refreshing={pullDownRefresh}
          initialScrollIndex={0}
          initialNumToRender={20}
          updateCellsBatchingPeriod={200}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.8}
          maxToRenderPerBatch={20}
          windowSize={25}
          onEndReached={loadMore}
          removeClippedSubviews={true}
          ListFooterComponent={
            !isDataListVisible && isExtraDataLoading ? (
              <View
                style={{
                  width: 50, 
                  height: 20,
                  alignSelf: 'center',
                  marginTop: padMarginSizes.xl,
                }}>
                <LottieView source={loader} autoPlay loop resizeMode="cover" />
              </View>
            ) : null
          }
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
