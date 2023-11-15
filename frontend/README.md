# Creating Project using Expo-Router and NativeWind v4
To create a Expo project using NativeWind v4, you just have to follow their documentention in this order:

  1. https://docs.expo.dev/tutorial/create-your-first-app/
  2. https://docs.expo.dev/routing/installation/#manual-installation
  3. https://www.nativewind.dev/v4/getting-started/expo-router

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
Now we are going to install `expo-router` and all we need to do is install the following dependencies:
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```
After this, change your `package.json` file

# Installing and configuring Apollo Client
