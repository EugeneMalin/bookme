import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#577399',
    secondary: '#BDD5EA',
    error: '#f13a59',
  },
  offsets: {
    xs: 4,
    s: 6,
    m: 8,
    l: 12,
    xl: 24,
    xxl: 32
  },
  sizes: {
    small: 14,
    medium: 16,
    big: 26,
    huge: 48
  }
};
