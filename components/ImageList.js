import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import ImageItem from './ImageItem';

import {IMAGE_WIDTH, IMAGE_HEIGHT} from '../Utils/Cons';

const ImageList = ({style, datas}) => {
  return (
    <View style={style}>
      <FlatList
        data={datas}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({item: {poster}}) => {
          return (
            <ImageItem
              style={styles.item}
              uri={poster}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  contentContainer: {},
  item: {
    padding: 5,
  },
});

ImageList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }),
  ),
};
