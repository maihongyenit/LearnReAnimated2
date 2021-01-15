import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import PropTypes from 'prop-types';

import {ImagesAnimatedContext} from './Context';

import {
  makeInputRange,
  makeOutTranslate,
  makeOutZIndex,
  makeOutScale,
  makeOutOpacity,
} from '../Utils/Utils';

const defaultTranslateValue = 50;
const defaultScaleValue = 0.8;
const defaultOpacityValue = 0.8;

const AnimatedImage = ({
  index,
  len,
  translateValue,
  scaleValue,
  opacityValue,
  children,
  padding,
}) => {
  const imagesAnimated = useContext(ImagesAnimatedContext);

  const inputRange = makeInputRange(len);
  const outTranslateX = makeOutTranslate(
    inputRange,
    index,
    translateValue || defaultTranslateValue,
  );
  const outZIndex = makeOutZIndex(inputRange, index);
  const outScale = makeOutScale(
    inputRange,
    index,
    scaleValue || defaultScaleValue,
  );
  const outOpacity = makeOutOpacity(
    inputRange,
    index,
    opacityValue || defaultOpacityValue,
  );

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      imagesAnimated.value,
      inputRange,
      outTranslateX,
      'clamp',
    );
    const zIndex = interpolate(
      imagesAnimated.value,
      inputRange,
      outZIndex,
      'clamp',
    );
    const scale = interpolate(
      imagesAnimated.value,
      inputRange,
      outScale,
      'clamp',
    );
    const opacity = interpolate(
      imagesAnimated.value,
      inputRange,
      outOpacity,
      'clamp',
    );

    return {
      transform: [{translateX}, {scale}],
      zIndex,
      opacity,
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
  translateValue: PropTypes.number,
  scaleValue: PropTypes.number,
  opacityValue: PropTypes.number,
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};
