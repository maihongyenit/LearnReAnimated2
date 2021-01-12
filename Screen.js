import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import AnimatedCard from './components/AnimatedCard';

import cardsData from './datas/datas.json';
import {cardHeight, cardTitleHeight, cardPadding} from './utils/Cons';
import {AnimatedContext} from './components/Context';

export default function Screen(props) {
  const insets = useSafeAreaInsets();
  const animatedY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    animatedY.value = event.contentOffset.y;
  });

  const renderedCards = cardsData.map((card, i) => {
    const inputRange = [-(cardPadding + cardHeight - cardTitleHeight), 0];
    const outputRange = [0, (cardPadding + cardHeight - cardTitleHeight) * -i];
    if (i > 0) {
      inputRange.push((cardPadding + cardTitleHeight) * i);
      outputRange.push((cardPadding + cardHeight) * -i);
    }
    const paddingTop = i === 0 ? cardPadding + insets.top : cardPadding;
    const paddingBottom =
      i === cardsData.length - 1 ? insets.bottom + cardPadding : 0;
    return (
      <AnimatedCard
        key={card.id}
        inputRange={inputRange}
        outputRange={outputRange}
        extrapolate="clamp"
        style={[
          styles.card,
          {
            paddingTop,
            paddingBottom,
          },
        ]}
        card={card}
        cardHeight={cardHeight}
        cardTitleHeight={cardTitleHeight}
        cardPadding={cardPadding}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <AnimatedContext.Provider value={animatedY}>
          {renderedCards}
        </AnimatedContext.Provider>
      </View>
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card: {
    paddingHorizontal: cardPadding,
  },
});
