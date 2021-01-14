import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import {AnimatedContext} from './Context';

const StackItemAnimated = ({
  index,
  leftStep,
  itemHeight,
  children,
  viewPortWidth,
  visibleItems,
}) => {
  const {animatedIndex} = useContext(AnimatedContext);
  const inputRange = [index - 1, index, index + 1];
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(animatedIndex.value, inputRange, [
            0,
            0,
            -viewPortWidth / 2,
          ]),
        },
        {
          rotateZ: `${interpolate(animatedIndex.value, inputRange, [
            0,
            -5,
            -5,
          ])}deg`,
        },
      ],
      opacity: interpolate(animatedIndex.value, inputRange, [
        1 - 1 / visibleItems,
        1,
        0,
      ]),
    };
  });

  // Position
  const top = -itemHeight * index + itemHeight * 0.05;

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          top,
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default StackItemAnimated;

const styles = StyleSheet.create({});

StackItemAnimated.propTypes = {
  index: PropTypes.number.isRequired,
  leftStep: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  viewPortWidth: PropTypes.number.isRequired,
  visibleItems: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
