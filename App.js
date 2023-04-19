/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screens/auth/splash';
import HomeContainer from './src/screens/home/HomeContainer';

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              tabBarStyle: {
                display: 'none',
              },
              tabBarVisible: false,
              tabBarButton: () => null,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="home"
            component={HomeContainer}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
