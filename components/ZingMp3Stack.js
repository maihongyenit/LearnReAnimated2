import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import {
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Directions, FlingGestureHandler} from 'react-native-gesture-handler';

import AnimatedDots from './AnimatedDots';
import ImageList from './ImageList';
import {AnimatedContext} from './Context';
import Ghost from './Ghost';

import {
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  IMAGE_PADDING,
  IMAGE_TRANSLATE_X,
  IMAGE_SCALE,
  IMAGE_OPACITY,
  DOT_ACTIVE_COLOR,
} from '../Utils/Cons';
import {composeStyles} from '../Utils/Utils';

const ZingMp3Stack = ({style, datas}) => {
  const activeIndex = useSharedValue(0);
  const handleFlingLeft = useAnimatedGestureHandler({
    onEnd: () => {
      const oldValue = activeIndex.value;
      if (oldValue >= datas.length - 1) {
        activeIndex.value = 0;
      } else {
        activeIndex.value = oldValue + 1;
      }
    },
  });
  const handleFlingRight = useAnimatedGestureHandler({
    onEnd: () => {
      const oldValue = activeIndex.value;
      if (oldValue === 0) {
        activeIndex.value = datas.length - 1;
      } else {
        activeIndex.value = oldValue - 1;
      }
    },
  });

  return (
    <View style={[styles.container, composeStyles(style)]}>
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onGestureEvent={handleFlingLeft}>
        <Ghost style={styles.container}>
          <FlingGestureHandler
            key="left"
            direction={Directions.RIGHT}
            onGestureEvent={handleFlingRight}>
            <Ghost style={styles.container}>
              <AnimatedContext.Provider value={activeIndex}>
                <ImageList
                  style={styles.images}
                  datas={datas}
                  itemWidth={IMAGE_WIDTH}
                  itemHeight={IMAGE_HEIGHT}
                  padding={IMAGE_PADDING}
                  translateValue={IMAGE_TRANSLATE_X}
                  scaleValue={IMAGE_SCALE}
                  opacityValue={IMAGE_OPACITY}
                />
                <AnimatedDots
                  style={styles.dots}
                  datas={datas}
                  animateProps={{
                    activeColor: DOT_ACTIVE_COLOR,
                  }}
                />
              </AnimatedContext.Provider>
            </Ghost>
          </FlingGestureHandler>
        </Ghost>
      </FlingGestureHandler>
    </View>
  );
};

export default ZingMp3Stack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

ZingMp3Stack.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
