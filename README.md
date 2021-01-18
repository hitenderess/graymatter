# React Native Graymatter Sample Application

## Build and run the app

1. Install and setup the React Native CLI environment as described at [http://reactnative.dev/docs/environment-setup](http://reactnative.dev/docs/environment-setup)
2. Clone this repository
3. Run `npm install` , all required packages will be installed.
4. It is recommended to run `react-native start` command from root project directory.
5. How to run the app:

    ### iOS
      
    1. Run `pod install` from `graymatter/ios` folder
    2. `react-native run-ios` runs the iOS build in the default simulator.
     
    ### Android

    1. Run an AVD (Android Virtual Device) emulator. This could be started via Android Studio (Tools -> AVD Manager) or the command line.
    2. `react-native run-android` runs the Android build.

For running on a physical iOS/Android device, [take a look at the docs for the subtleties involved](https://facebook.github.io/react-native/docs/running-on-device).