import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ZingMp3Stack from './components/ZingMp3Stack';

import dataJson from './datas/datas.json';

export default function ZingMp3StackEx() {
  return (
    <SafeAreaView style={styles.container}>
      <ZingMp3Stack datas={dataJson} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'chocolate',
  },
});
