import React, {useContext} from 'react';
import {SafeAreaView, Switch, Text} from 'react-native';

import styles from './styles';
import ThemeContext from '@contexts/themeContext';

function Opciones({route}) {
  const {isLightTheme, toggleTheme} = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.containerDark]}>
      <Text style={[styles.text, !isLightTheme && styles.textDark]} >Modo Nocturno:</Text>
      <Switch onValueChange={toggleTheme} value={!isLightTheme} />
    </SafeAreaView>
  );
}

export default Opciones;
