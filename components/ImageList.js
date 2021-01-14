import React, {useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {Directions, FlingGestureHandler} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler} from 'react-native-reanimated';

import ImageItem from './ImageItem';
import StackItemAnimated from './StackItemAnimated';
import {AnimatedContext} from './Context';
import Ghost from './Ghost';

import {
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  IMAGE_PADDING,
  IMAGE_STEP_LEFT,
  WINDOW_WIDTH,
  IMAGE_VISIBLE_ITEMS,
} from '../Utils/Cons';

const CellRender = ({children, style, ...restProps}) => {
  const length = restProps.parentProps.data.length;
  const {index} = restProps;
  const zIndex = length - index;
  const newStyle = [
    style,
    {
      zIndex,
    },
  ];

  return (
    <View style={newStyle} {...restProps}>
      {children}
    </View>
  );
};

const ImageList = ({style, datas}) => {
  const {activeIndex} = useContext(AnimatedContext);

  const gestureHandleLeft = useAnimatedGestureHandler({
    onEnd: () => {
      const newIndex = activeIndex.value + 1;
      if (newIndex < datas.length) {
        activeIndex.value = newIndex;
      }
    },
  });
  const gestureHandleRight = useAnimatedGestureHandler({
    onEnd: () => {
      const newIndex = activeIndex.value - 1;
      if (newIndex >= 0) {
        activeIndex.value = newIndex;
      }
    },
  });

  return (
    <View style={[styles.container, style]}>
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onGestureEvent={gestureHandleLeft}>
        <Ghost style={styles.container}>
          <FlingGestureHandler
            key="right"
            direction={Directions.RIGHT}
            onGestureEvent={gestureHandleRight}>
            <Ghost style={styles.container}>
              <FlatList
                data={datas}
                keyExtractor={(_, i) => `${i}`}
                renderItem={({item: {poster}, index}) => {
                  return (
                    <StackItemAnimated
                      index={index}
                      leftStep={IMAGE_STEP_LEFT}
                      itemHeight={IMAGE_HEIGHT + 2 * IMAGE_PADDING}
                      viewPortWidth={WINDOW_WIDTH}
                      visibleItems={IMAGE_VISIBLE_ITEMS}>
                      <ImageItem
                        uri={poster}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        padding={IMAGE_PADDING}
                      />
                    </StackItemAnimated>
                  );
                }}
                CellRendererComponent={CellRender}
                contentContainerStyle={styles.contentContainer}
                scrollEnabled={false}
                initialNumToRender={datas.length}
              />
            </Ghost>
          </FlingGestureHandler>
        </Ghost>
      </FlingGestureHandler>
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

ImageList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }),
  ),
};
