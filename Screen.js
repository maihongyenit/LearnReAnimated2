import Animated from 'react-native-reanimated';
import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import HeaderList from './components/HeaderList';
import ImageList from './components/ImageList';

import datas from './datas/datas.json';

export default function AnimatedStyleUpdateExample() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderList datas={datas} />
      <ImageList datas={datas} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
