import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import AnimatedDot from './AnimatedDot';

import {composeStyles} from '../Utils/Utils';

const AnimatedDots = ({style, dotStyle, datas, animateProps}) => {
  const renderedDots = datas.map((_, i) => {
    return (
      <AnimatedDot
        key={i}
        index={i}
        len={datas.length}
        style={dotStyle}
        animateProps={animateProps}
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
