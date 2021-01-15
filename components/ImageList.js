import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {useDerivedValue, withTiming} from 'react-native-reanimated';

import ImageItem from './ImageItem';
import AnimatedImage from './AnimatedImage';
import {ImagesAnimatedContext, AnimatedContext} from './Context';

const ImageList = ({
  style,
  datas,
  itemWidth,
  itemHeight,
  padding,
  translateValue,
  scaleValue,
  opacityValue,
}) => {
  const {activeIndex} = useContext(AnimatedContext);
  const imagesAnimated = useDerivedValue(() => {
    return withTiming(activeIndex.value);
  });
  const renderedItems = datas.map(({poster}, i) => {
    return (
      <AnimatedImage
        key={`${i}`}
        index={i}
        len={datas.length}
        padding={padding}
        translateValue={translateValue}
        scaleValue={scaleValue}
        opacityValue={opacityValue}>
        <ImageItem
          width={itemWidth}
          height={itemHeight}
          poster={poster}
          index={i}
        />
      </AnimatedImage>
    );
  });

  return (
    <ImagesAnimatedContext.Provider value={imagesAnimated}>
      <View
        style={[
          styles.container,
          {
            height: itemHeight + 2 * padding,
          },
          style,
        ]}>
        {renderedItems}
      </View>
    </ImagesAnimatedContext.Provider>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
  },
});

ImageList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  itemWidth: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string.isRequired,
    }),
  ),
  translateValue: PropTypes.number,
  scaleValue: PropTypes.number,
  opacityValue: PropTypes.number,
};
