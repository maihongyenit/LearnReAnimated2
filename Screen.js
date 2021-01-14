import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  useSharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import HeaderList from './components/HeaderList';
import ImageList from './components/ImageList';
import {AnimatedContext} from './components/Context';

import dataJson from './datas/datas.json';

export default function HorizontalStack() {
  const [datas] = useState(dataJson);
  const activeIndex = useSharedValue(0);
  const animatedIndex = useDerivedValue(() => {
    return withTiming(activeIndex.value);
  });

  return (
    <AnimatedContext.Provider value={{activeIndex, animatedIndex}}>
      <SafeAreaView style={styles.container}>
        <HeaderList datas={datas} />
        <ImageList datas={datas} />
      </SafeAreaView>
    </AnimatedContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
