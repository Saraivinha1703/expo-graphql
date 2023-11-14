import { StatusBarStyle } from 'expo-status-bar';
import { vars } from 'nativewind';

export type ThemesVariant = 'light' | 'xmas' | 'dark' | 'halloween';

export const Themes = {
  light: vars({
    '--color-primary': '#000000',
    '--color-secondary': '#ffffffff',
    '--color-outstand': '#2222dd',
  }),
  dark: vars({
    '--color-primary': '#ffffff',
    '--color-secondary': '#000000',
    '--color-outstand': '#552288',
  }),
  xmas: vars({
    '--color-primary': '#fff',
    '--color-secondary': '#3225de',
    '--color-outstand': '#0ca90c',
  }),
  halloween: vars({
    '--color-primary': '#000000',
    '--color-secondary': '#5522dd',
    '--color-outstand': '#ffcc00',
  }),
};

type StatusBarThemeStyle = {
  [keys in ThemesVariant]: {
    style: StatusBarStyle;
    background: string;
  };
};

export const StatusBarTheme: StatusBarThemeStyle = {
  light: {
    style: 'dark',
    background: '#fff',
  },
  dark: {
    style: 'light',
    background: '#000',
  },
  xmas: {
    style: 'light',
    background: '#3225de',
  },
  halloween: {
    style: 'dark',
    background: '#52d',
  },
};
