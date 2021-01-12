import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({style, card, cardHeight, cardTitleHeight, cardPadding}) => {
  const {title, color, cardColor} = card;
  const cardShapeStyle = {
    height: cardHeight,
    borderRadius: cardHeight / 6,
    backgroundColor: cardColor,
  };

  return (
    <View style={[...style]}>
      {/* Card shadow */}
      <View style={styles.container}>
        {/* Card shape */}
        <View style={[styles.shapeContainer, cardShapeStyle]}>
          {/* Title */}
          <View
            style={[
              styles.titleContainer,
              {
                paddingTop: cardPadding,
                height: cardTitleHeight,
              },
            ]}>
            {/* <Text
              style={[
                styles.title,
                {
                  marginStart: cardHeight / 6,
                  color,
                },
              ]}>
              {title}
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 2},
  },
  shapeContainer: {
    overflow: 'hidden',
  },
  titleContainer: {
    backgroundColor: '#80808080',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

Card.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  cardHeight: PropTypes.number.isRequired,
  cardTitleHeight: PropTypes.number.isRequired,
  cardPadding: PropTypes.number.isRequired,
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cardColor: PropTypes.string.isRequired,
  }).isRequired,
};
