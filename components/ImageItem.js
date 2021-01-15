import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const ImageItem = ({width, height, poster, index}) => {
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
        <Image style={styles.image} source={{uri: poster}} />
        <Text style={styles.text}>{index}</Text>
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
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

ImageItem.propTypes = {
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};
