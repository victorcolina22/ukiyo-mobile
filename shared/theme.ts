import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type RNStyles = ViewStyle & TextStyle & ImageStyle;
type CustomStyles =
  | 'backgroundColorGray'
  | 'center'
  | 'textColorWhite'
  | 'headerBackgroundColor';

export const globalStyles: Record<CustomStyles, RNStyles> = {
  backgroundColorGray: {
    backgroundColor: '#17181a',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColorWhite: {
    color: '#eeeeee',
  },
  headerBackgroundColor: {
    backgroundColor: '#25262b',
  },
};
