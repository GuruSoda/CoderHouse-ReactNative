import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {grey, black, blue} from '@constants/colors';

import style from './styles';

import Home from '@screens/Home';
import GameList from '@screens/GameList';
import MarqueeList from '@screens/MarqueeList';

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerStyle: style.titulo}}>

        <HomeStack.Screen
          name="Inicio"
          options={{headerShown: false}}
          component={Home}
        />
        <HomeStack.Screen
          name="ListGames"
          options={ {title: 'Listado de Juegos', headerTintColor: blue } }
          component={GameList}
        />
        <HomeStack.Screen
          name="ListMarquee"
          options={ {title: 'Listado de Marquesinas', headerTintColor: blue} }
          component={MarqueeList}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
