import { StatusBarStyle } from 'expo-status-bar';
import { vars } from 'nativewind';

export type ThemesVariant = 'light' | 'xmas' | 'dark' | 'halloween';

export const Themes = {
  light: vars({
    '--color-primary': '#000000',
    '--color-secondary': '#ffffffff',
    '--color-outstand': '#2288dd',
    '--color-outstand-secondary': '#88dd55',
  }),
  dark: vars({
    '--color-primary': '#ffffff',
    '--color-secondary': '#222',
    '--color-outstand': '#552288',
    '--color-outstand-secondary': '#3399bb',
  }),
  xmas: vars({
    '--color-primary': '#fff',
    '--color-secondary': '#4546de',
    '--color-outstand': '#4ca94c',
    '--color-outstand-secondary': '#ce4d4d',
  }),
  halloween: vars({
    '--color-primary': '#222',
    '--color-secondary': '#4422bb',
    '--color-outstand': '#ffcc00',
    '--color-outstand-secondary': '#85e21f',
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
    background: '#222',
  },
  xmas: {
    style: 'light',
    background: '#4546de',
  },
  halloween: {
    style: 'dark',
    background: '#4422bb',
  },
};
