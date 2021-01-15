import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {useDerivedValue, withTiming} from 'react-native-reanimated';

import AnimatedDot from './AnimatedDot';
import {AnimatedContext} from './Context';

import {composeStyles, getUpperBound, getLowerBound} from '../Utils/Utils';

const AnimatedDots = ({style, dotStyle, datas, animateProps}) => {
  const activeIndex = useContext(AnimatedContext);
  const upper = getUpperBound();
  const lower = getLowerBound();

  const animatedFirstDot = useDerivedValue(() => {
    if (activeIndex.value === 0) {
      return withTiming(upper);
    }
    return withTiming(lower);
  });
  const animatedLastDot = useDerivedValue(() => {
    if (activeIndex.value === datas.length - 1) {
      return withTiming(upper);
    }
    return withTiming(lower);
  });
  const animatedDots = useDerivedValue(() => {
    // Dont animated when reverse index to 0
    if (activeIndex.value === 0) {
      return 0;
    } else {
      return withTiming(activeIndex.value);
    }
  });

  const renderedDots = datas.map((_, i) => {
    let animated;
    if (i === 0) {
      animated = animatedFirstDot;
    } else if (i === datas.length - 1) {
      animated = animatedLastDot;
    } else {
      animated = animatedDots;
    }

    return (
      <AnimatedDot
        key={i}
        index={i}
        len={datas.length}
        style={dotStyle}
        animateProps={animateProps}
        animated={animated}
      />
    );
  });

  return (
    <View style={[styles.container, composeStyles(style)]}>{renderedDots}</View>
  );
};

export default AnimatedDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

AnimatedDots.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  datas: PropTypes.array.isRequired,

  dotStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  animateProps: PropTypes.shape({
    activeColor: PropTypes.string,
    activeWidth: PropTypes.number,
  }),
};
