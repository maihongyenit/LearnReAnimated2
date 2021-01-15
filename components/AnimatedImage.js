import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import {AnimatedContext} from './Context';
import {
  makeInputRange,
  makeOutputRange,
  makeOutputRangeZ,
} from '../Utils/Utils';

const AnimatedImage = ({index, len, translateDistance, children, padding}) => {
  const {animatedIndex} = useContext(AnimatedContext);
  const inputRange = makeInputRange(len);
  const outputRange = makeOutputRange(inputRange, index, translateDistance);
  const outputRangeZ = makeOutputRangeZ(inputRange, index);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animatedIndex.value,
      inputRange,
      outputRange,
      'clamp',
    );
    const zIndex = interpolate(
      animatedIndex.value,
      inputRange,
      outputRangeZ,
      'clamp',
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
      zIndex,
    };
  });

  return (
    <Animated.View style={[styles.container, {top: padding}, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedImage;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

AnimatedImage.propTypes = {
  index: PropTypes.number.isRequired,
  len: PropTypes.number.isRequired,
  translateDistance: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};
