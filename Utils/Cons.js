import {Dimensions} from 'react-native';

export const HEADER_ITEM_HEIGHT = 70;
export const HEADER_ITEM_PADDING = 10;

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get(
  'window',
);
export const IMAGE_WIDTH = WINDOW_WIDTH * 0.8;
export const IMAGE_HEIGHT = WINDOW_WIDTH * 1.6;
export const IMAGE_PADDING = 5;
export const IMAGE_STEP_LEFT = IMAGE_WIDTH * 0.13;
export const IMAGE_VISIBLE_ITEMS = 3;
