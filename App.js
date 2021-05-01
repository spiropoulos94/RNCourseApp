import React from 'react';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
