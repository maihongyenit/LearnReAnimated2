import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {HEADER_ITEM_HEIGHT, HEADER_ITEM_PADDING} from '../Utils/Cons';
import HeaderItem from './HeaderItem';

const HeaderList = ({style, datas}) => {
  return (
    <View style={[styles.container, style]}>
      <FlatList
        scrollEnabled={false}
        data={datas}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({item: {title, location, date}, index}) => {
          return <HeaderItem title={title} location={location} date={date} />;
        }}
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
