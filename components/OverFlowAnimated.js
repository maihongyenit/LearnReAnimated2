import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {AnimatedContext} from './Context';

const OverFlowAnimated = ({index, children, itemHeight}) => {
  const {animatedIndex} = useContext(AnimatedContext);
  const inputRange = [index - 1, index, index + 1];
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animatedIndex.value, inputRange, [
            -(index - 1) * itemHeight,
            -index * itemHeight,
            -(index + 1) * itemHeight,
          ]),
        },
      ],
      opacity: interpolate(animatedIndex.value, inputRange, [0, 1, 0]),
    };
  });

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default OverFlowAnimated;

const styles = StyleSheet.create({});

OverFlowAnimated.propTypes = {
  index: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
