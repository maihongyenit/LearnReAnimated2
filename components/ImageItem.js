import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const ImageItem = ({width, height, uri}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shape,
          {
            width,
            height,
            borderRadius: width * 0.05,
          },
        ]}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  shape: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});

ImageItem.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};
