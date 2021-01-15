import {Dimensions} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get(
  'window',
);
export const IMAGE_PADDING = WINDOW_WIDTH * 0.05;
export const IMAGE_WIDTH = (WINDOW_WIDTH - IMAGE_PADDING * 2) / 2;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;
export const IMAGE_TRANSLATE_X = 0.5 * IMAGE_WIDTH;
export const IMAGE_SCALE = 0.85;
export const IMAGE_OPACITY = 0.85;

export const DOT_ACTIVE_COLOR = 'blue';
