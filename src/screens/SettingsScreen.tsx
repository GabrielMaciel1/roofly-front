import React from 'react';
import { View, Text } from 'react-native';
import useTheme from '../theme/ThemeContext';
import { createSettingsScreenStyles } from '../styles/SettingsScreen.styles';

export default function SettingsScreen() {
  const colors = useTheme();
  const styles = createSettingsScreenStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.description}>Esta é a tela de configurações. Em breve, mais opções aqui!</Text>
    </View>
  );
}