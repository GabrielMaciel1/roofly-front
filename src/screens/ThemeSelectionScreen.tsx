import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useThemeContext } from '../contexts/ThemeContext';

type ThemeSelectionScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ThemeSelection'>;
};

const ThemeSelectionScreen: React.FC<ThemeSelectionScreenProps> = ({ navigation }) => {
  const { colors, theme, setTheme } = useThemeContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    optionButton: {
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    optionText: {
      fontSize: 18,
      color: colors.text,
    },
    selectedIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.button,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionButton} onPress={() => setTheme('light')}>
        <Text style={styles.optionText}>Claro</Text>
        {theme === 'light' && <View style={styles.selectedIndicator} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => setTheme('dark')}>
        <Text style={styles.optionText}>Escuro</Text>
        {theme === 'dark' && <View style={styles.selectedIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

export default ThemeSelectionScreen;
