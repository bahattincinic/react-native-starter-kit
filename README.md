# React Native Starter Kit

Yet another starter kit for React Native.

## Technologies

- React Native
- Native Base
- Redux
- Flow
- Eslint

### Requirements
- [Xcode](https://developer.apple.com/xcode/)
- [Node](https://nodejs.org)
- [Brew](http://brew.sh/)
- [Git](https://git-scm.com/)

### Installation

```bash
$ npm install -g react-native-cli
$ brew install watchman
$ brew install flow
$ git clone git@github.com:bahattincinic/react-native-starter-kit.git
$ cd react-native-starter-kit && npm install
```

### To run the project for Android

```bash
$ react-native run-android
```
Facebook recommended to Genymotion for Android Emulator. Genymotion is Fast And Easy Android Emulator.

### To run the project for IOS (require Xcode)

```bash
$ Open ios/starterKit.xcodeproj
Run project with xcode.
```
or
```bash
$ react-native run-ios
```

Xcode 8.0 or higher is required. It can be installed from the App Store.

### Linting

```bash
$ npm run lint
```
Lints your JavaScript.


### How to generate APK ?

```bash
$ cd android
$ ./gradlew assembleRelease
```

The generated APK can be found under **android/app/build/outputs/apk/app-release.apk**, and is ready to be distributed.

### Xcode & IOS Simulator Shortcuts

- Clean Build -> ⇧⌘K (Shift + Command + K) - to clean builded frameworks.
- Clean Build Folder -> ⌥⇧⌘K (Option+Shift+Command+K)
- Build -> ⌘B
- Developer Menu -> ⌘D (IOS Simulator)