export function composeStyles(styles) {
  if (Array.isArray(styles)) {
    return styles.reduce((obj, item) => {
      return {
        ...obj,
        ...item,
      };
    }, {});
  }
  return styles;
}

export function makeInputRange(len) {
  return Array.from({length: len}, (_, i) => i);
}

export function makeOutTranslate(inputRange, index, translate) {
  const len = inputRange.length;
  const negativePos = (index + 1) % len;
  const positivePos = (index - 1 + len) % len;

  const result = inputRange.map((value) => {
    if (value === negativePos) {
      return -translate;
    } else if (value === positivePos) {
      return translate;
    } else {
      return 0;
    }
  });
  return result;
}

export function makeOutZIndex(inputRange, index) {
  const len = inputRange.length;
  const negativePos = (index + 1) % len;
  const positivePos = (index - 1 + len) % len;

  const result = inputRange.map((value) => {
    if (value === negativePos || value === positivePos) {
      return 1;
    } else if (value === index) {
      return 2;
    } else {
      return 0;
    }
  });
  return result;
}

export function makeOutScale(inputRange, index, scale) {
  const result = inputRange.map((value) => {
    if (value === index) {
      return 1;
    } else {
      return scale;
    }
  });
  return result;
}

export function makeOutOpacity(inputRange, index, opacity) {
  const len = inputRange.length;
  const negativePos = (index + 1) % len;
  const positivePos = (index - 1 + len) % len;

  const result = inputRange.map((value) => {
    if (value === negativePos || value === positivePos) {
      return opacity;
    } else if (value === index) {
      return 1;
    } else {
      return 0;
    }
  });
  return result;
}

export function makeInputRangeFirstLast() {
  return [getLowerBound(), getUpperBound()];
}

export function getUpperBound() {
  return 0;
}

export function getLowerBound() {
  return -1;
}
