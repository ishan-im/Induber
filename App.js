/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
 
  StyleSheet,
 KeyboardAvoidingView,
 Platform
} from 'react-native';

import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';

import MapScreen from './src/screens/MapScreen';

import EatsScreen from './src/screens/EatsScreen';

import store from './store/store';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="EatsScreen" component={EatsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
