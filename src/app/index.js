import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer, StatusBar} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {blue, dark} from '@constants/colors';

import ThemeContext, {themes} from '@contexts/themeContext';
import Games from '@constants/constant.json';
import {defaultsNavOptions} from '@constants/navigation';

import Home from '@screens/Home';
import GameList from '@screens/GameList';
import MarqueeList from '@screens/MarqueeList';
import GameDetail from '@screens/GameDetail';
import Opciones from '@screens/Opciones';

const HomeStack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const isLightTheme = theme === themes.light;
  const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);
  const barStyle = isLightTheme ? 'light-content' : 'dark-content';

  return (
    <ThemeContext.Provider value={ {isLightTheme, toggleTheme} }>
      {/* <StatusBar barStyle={barStyle} /> */}
      <NavigationContainer>
        <HomeStack.Navigator
          initialRouteName="Home"
          screenOptions={defaultsNavOptions(isLightTheme)}>
          <HomeStack.Screen
            name="Inicio"
            options={{headerShown: false}}
            component={Home}
            initialParams={{Games: Games}}
          />
          <HomeStack.Screen
            name="ListGames"
            options={{title: 'Listado de Juegos', headerTintColor: blue, headerStyle: {backgroundColor: !isLightTheme && dark, height: 30,} }}
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
          <HomeStack.Screen
            name="Opciones"
            options={{title: 'Opciones', headerTintColor: blue}}
            component={Opciones}
            initialParams={{game: {}}}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
