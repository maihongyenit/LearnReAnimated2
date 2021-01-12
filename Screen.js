import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  useDerivedValue,
  Easing,
  withSpring,
  withDecay,
  withRepeat,
  interpolate,
} from 'react-native-reanimated';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function AnimatedStyleUpdateExample(props) {
  const [toggle, setToggle] = useState(undefined);
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const translateYValue = useDerivedValue(() => {
    if (toggle === undefined) {
      return withTiming(0);
    }

    const toValue = toggle ? -windowHeight / 4 : windowHeight / 4;
    return withTiming(toValue);
  });
  const translateXValue = useDerivedValue(() => {
    if (toggle === undefined) {
      return withTiming(0);
    }

    const toValue = toggle ? windowWidth / 4 : -windowWidth / 4;
    return withTiming(toValue);
  });
  const translateValue2 = useDerivedValue(() => {
    const value = translateYValue.value;
    return withSpring(value);
  });

  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateYValue.value,
        },
        {
          translateX: translateXValue.value,
        },
      ],
    };
  });

  const boxAnimatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateValue2.value,
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => {
        setToggle((s) => !s);
      }}>
      <ScrollView onScroll></ScrollView>
      <View style={styles.row}>
        <Animated.View style={[styles.boxContainer, boxAnimatedStyle]} />
        <Animated.View style={[styles.boxContainer, boxAnimatedStyle2]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxContainer: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 100 / 4,
    backgroundColor: 'blue',
  },
});
