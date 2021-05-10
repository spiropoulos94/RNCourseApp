import React from 'react';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ColorPaletteModal from '../AwesomeProject/screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="ColorPaletteModal" component={ColorPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({
          title: route.params.paletteName
        })}
      />
    </MainStack.Navigator>
  );
};

export default App;
