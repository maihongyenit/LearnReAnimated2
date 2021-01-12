import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';

import {HEADER_ITEM_HEIGHT, HEADER_ITEM_PADDING} from '../Utils/Cons';

const HeaderItem = ({style, title, location, date}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.locationContainer}>
          <Entypo style={styles.icon} name="location" size={16} color="black" />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default HeaderItem;

const styles = StyleSheet.create({
  container: {
    height: HEADER_ITEM_HEIGHT,
    padding: HEADER_ITEM_PADDING,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: 5,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
});

HeaderItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
