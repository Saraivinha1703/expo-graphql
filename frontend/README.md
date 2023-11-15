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
Now update you `babel.config.js` file, including `expo-router` plugin.

```JS
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
};
```
To finish this part of the configuration, you just have to create a `app/_layout.js` file inside your root folder or `app/index.{js,jsx,ts,tsx}` and then run 
```
npm start
```
to test if everything is working.

## Installing/Configuring NativeW~ind v4

# Installing and configuring Apollo Client
