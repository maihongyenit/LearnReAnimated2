import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderItem = ({style, title, location, date, height, padding}) => {
  return (
    <View style={[style]}>
      <View
        style={{
          height,
          padding,
        }}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.locationContainer}>
            <Entypo
              style={styles.icon}
              name="location"
              size={16}
              color="black"
            />
            <Text style={styles.location}>{location}</Text>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderItem;

const styles = StyleSheet.create({
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
  height: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};
