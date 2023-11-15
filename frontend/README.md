# Creating Project using Expo-Router and NativeWind v4
To create a Expo project using NativeWind v4, you just have to follow their documentention in this order:

  1. https://docs.expo.dev/tutorial/create-your-first-app/
  2. https://docs.expo.dev/routing/installation/#manual-installation
  3. https://www.nativewind.dev/v4/getting-started/expo-router

## Installing/Configuring Expo
Basically what we need to do is create an expo app using:
```
npx create-expo-app yourProjectName
```
and install its dependencies
```
npx expo install react-dom react-native-web @expo/webpack-config
```
you can test it running:
```
npm start
```

## Installing/Configuring expo-router
Now we are going to install `expo-router` and all we need to do is install the following dependencies:
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```
After this, change your `package.json` file, for SDK version 49 and above, use:
```JSON
{
  "main": "expo-router/entry"
}
```
For version 48, follow their documentation [here](https://docs.expo.dev/routing/installation/#setup-entry-point).
Inside your `app.json` add a scheme.
```JSON
{
  "scheme": "your-app-scheme"
}
```
Now update you `babel.config.js` file, including `expo-router` and `react-native-reanimated` plugins.

```JS
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel', 'react-native-reanimated/plugin'],
  };
};
```
To finish this part of the configuration, you just have to create a `app/_layout.js` file inside your root folder or `app/index.{js,jsx,ts,tsx}` and then run 
```
npm start
```
to test if everything is working.

## Installing/Configuring NativeWind v4
Since we are using expo to manage our project's dependencies we are going to install NativeWind using it
```
npx expo install nativewind@^4.0.1 react-native-reanimated
npx expo install tailwindcss -- -D
```
To create our `tailwind.config.js` file, we just have to run
```
npx tailwindcss init
```
Add all of your `app/` files to be affected by tailwind and the nativewind preset inside your `tailwind.config.js` file
```JS
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Inside your root folder, create a `global.css` file with the following content
```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now we need to add our NativeWind preset (which was a plugin in older versions) in our `babel.config.js`
```JS
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {jsxImportSource: 'nativewind'}],
      'nativewind/babel'
    ],
    plugins: ['expo-router/babel', 'react-native-reanimated/plugin'],
  };
};
```
The next step, is to configure our `metro.config.js` file, which we do not have access using expo. To costumize it, we have to run this command:
```
npx expo customize metro.config.js
```
and we set this file to be like this:
```JS
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

config.resolver.assetExts.push(['cjs', 'ts']);

module.exports = withNativeWind(config, { input: './global.css' });
```
To finish this configuration, you just have to add an import from you `global.css` file to you `app/index.tsx` like this:
```TSX
...
import './global.css'
...

```
If you are using Typescript, you need to have an `app.d.ts` file inside your root folder with the following content
```TS

```
# Installing and configuring Apollo Client
