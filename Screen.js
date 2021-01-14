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

export default function AnimatedStyleUpdateExample(props) {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}></View>
  );
}

const styles = StyleSheet.create({});
