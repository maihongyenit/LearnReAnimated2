import React, {useContext} from 'react';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import Card from './Card';
import {AnimatedContext} from './Context';

const AnimatedCard = (props) => {
  const {inputRange, outputRange, extrapolate, ...restProps} = props;
  const sharedValue = useContext(AnimatedContext);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            sharedValue.value,
            inputRange,
            outputRange,
            extrapolate,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={animatedStyle}>
      <Card {...restProps} />
    </Animated.View>
  );
};

export default AnimatedCard;

AnimatedCard.propTypes = {
  inputRange: PropTypes.array.isRequired,
  outputRange: PropTypes.array.isRequired,
  extrapolate: PropTypes.string.isRequired,
};
