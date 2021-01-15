import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

class Ghost extends React.Component {
  render() {
    const {children, ...restProps} = this.props;
    return <View {...restProps}>{children}</View>;
  }
}

const AnimatedGhost = Animated.createAnimatedComponent(Ghost);

export default AnimatedGhost;
