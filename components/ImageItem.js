import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';

const ImageItem = ({style, uri, width, height}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Item */}
      <Image
        style={[
          styles.image,
          {
            width,
            height,
            borderRadius: width * 0.1,
          },
        ]}
        source={{uri}}
      />
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
  image: {
    resizeMode: 'cover',
  },
});

ImageItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  uri: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
