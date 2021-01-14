import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import {AnimatedContext} from './Context';

import {composeStyles} from '../Utils/Utils';

const defaultDotSize = 10;
const defaultColor = 'white';
const defaultDotSizeActive = defaultDotSize * 3;
const defaultColorActive = 'red';

const AnimatedDot = ({style, index, activeColor, activeWidth, len}) => {
  const {animatedIndex, animatedIndexFirst, animatedIndexLast} = useContext(
    AnimatedContext,
  );

  let widthInActive, colorInActive, composeStyle;
  if (style) {
    composeStyle = composeStyles(style);
    widthInActive = composeStyle.width;
    colorInActive = composeStyle.backgroundColor;
  } else {
    widthInActive = defaultDotSize;
    colorInActive = defaultColor;
  }
  const colorActive = activeColor || defaultColorActive;
  const widthActive = activeWidth || defaultDotSizeActive;

  const animatedStyle = useAnimatedStyle(() => {
    let inputRange, outputRangeColor, outputRangeWidth, value;
    if (index === 0) {
      inputRange = [-1, 0];
      outputRangeColor = [colorInActive, colorActive];
      outputRangeWidth = [widthInActive, widthActive];
      value = animatedIndexFirst.value;
    } else if (index === len - 1) {
      inputRange = [-1, 0];
      outputRangeColor = [colorInActive, colorActive];
      outputRangeWidth = [widthInActive, widthActive];
      value = animatedIndexLast.value;
    } else {
      inputRange = [index - 1, index, index + 1];
      outputRangeColor = [colorInActive, colorActive, colorInActive];
      outputRangeWidth = [widthInActive, widthActive, widthInActive];
      value = animatedIndex.value;
    }
    return {
      width: interpolate(value, inputRange, outputRangeWidth, 'clamp'),
      backgroundColor: interpolateColor(value, inputRange, outputRangeColor),
    };
  });

  return (
    <Animated.View style={[styles.defaultDot, composeStyle, animatedStyle]} />
  );
};

export default AnimatedDot;

const styles = StyleSheet.create({
  defaultDot: {
    width: defaultDotSize,
    height: defaultDotSize,
    backgroundColor: defaultColor,
    borderRadius: defaultDotSize / 2,
    marginHorizontal: defaultDotSize / 2,
  },
});

AnimatedDot.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  index: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
  animateProps: PropTypes.shape({
    activeColor: PropTypes.string,
    activeWidth: PropTypes.number,
  }),
};
