import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import {composeStyles, makeInputRangeFirstLast} from '../Utils/Utils';

const defaultDotSize = 10;
const defaultColor = 'white';
const defaultDotSizeActive = defaultDotSize * 3;
const defaultColorActive = 'red';

const AnimatedDot = ({style, index, animateProps, len, animated}) => {
  let widthInActive, colorInActive, composeStyle;
  if (style) {
    composeStyle = composeStyles(style);
    widthInActive = composeStyle.width;
    colorInActive = composeStyle.backgroundColor;
  } else {
    widthInActive = defaultDotSize;
    colorInActive = defaultColor;
  }
  const colorActive =
    (animateProps && animateProps.activeColor) || defaultColorActive;
  const widthActive =
    (animateProps && animateProps.activeWidth) || defaultDotSizeActive;

  let inputRange, outputRangeColor, outputRangeWidth;
  if (index === 0) {
    inputRange = makeInputRangeFirstLast();
    outputRangeColor = [colorInActive, colorActive];
    outputRangeWidth = [widthInActive, widthActive];
  } else if (index === len - 1) {
    inputRange = makeInputRangeFirstLast();
    outputRangeColor = [colorInActive, colorActive];
    outputRangeWidth = [widthInActive, widthActive];
  } else {
    inputRange = [index - 1, index, index + 1];
    outputRangeColor = [colorInActive, colorActive, colorInActive];
    outputRangeWidth = [widthInActive, widthActive, widthInActive];
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, inputRange, outputRangeWidth, 'clamp'),
      backgroundColor: interpolateColor(
        animated.value,
        inputRange,
        outputRangeColor,
      ),
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
  animated: PropTypes.object.isRequired,
};
