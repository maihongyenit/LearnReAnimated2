import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {HEADER_ITEM_HEIGHT, HEADER_ITEM_PADDING} from '../Utils/Cons';
import HeaderItem from './HeaderItem';
import OverFlowAnimated from './OverFlowAnimated';

const HeaderList = ({style, datas}) => {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={datas}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({item: {title, location, date}, index}) => {
          return (
            <OverFlowAnimated index={index} itemHeight={HEADER_ITEM_HEIGHT}>
              <HeaderItem
                title={title}
                location={location}
                date={date}
                height={HEADER_ITEM_HEIGHT}
                padding={HEADER_ITEM_PADDING}
              />
            </OverFlowAnimated>
          );
        }}
        scrollEnabled={false}
        initialNumToRender={datas.length}
      />
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  container: {
    height: HEADER_ITEM_HEIGHT,
    overflow: 'hidden',
  },
});

HeaderList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
