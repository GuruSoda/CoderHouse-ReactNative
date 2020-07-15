import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {blue} from '@constants/colors';

import style from './styles';
import Games from '@constants/constant.json';

import Home from '@screens/Home';
import GameList from '@screens/GameList';
import MarqueeList from '@screens/MarqueeList';
import GameDetail from '@screens/GameDetail';

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
          initialParams={{Games: Games}}
        />
        <HomeStack.Screen
          name="ListGames"
          options={{title: 'Listado de Juegos', headerTintColor: blue}}
          component={GameList}
          initialParams={{Games: Games}}
        />
        <HomeStack.Screen
          name="ListMarquee"
          options={{title: 'Listado de Marquesinas', headerTintColor: blue}}
          component={MarqueeList}
          initialParams={{Games: Games}}
        />
        <HomeStack.Screen
          name="GameDetail"
          options={{title: '', headerTintColor: blue}}
          component={GameDetail}
          initialParams={{game: {}}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
