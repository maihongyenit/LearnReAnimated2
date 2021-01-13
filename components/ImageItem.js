import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';

const ImageItem = ({style, uri, width, height, padding}) => {
  return (
    <View style={[styles.container, {padding}, style]}>
      <View
        style={[
          styles.shape,
          {
            width,
            height,
            borderRadius: width * 0.1,
          },
        ]}>
        <Image style={[styles.image]} source={{uri}} />
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
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1,
  },
});

ImageItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  uri: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
