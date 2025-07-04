import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createSettingsScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: colors.description,
      textAlign: 'center',
    },
  });
