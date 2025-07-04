import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createForgotPasswordStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: colors.text,
    },
    description: {
      textAlign: 'center',
      marginBottom: 30,
      color: colors.text,
    },
    button: {
      backgroundColor: colors.secondary,
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    buttonText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      color: colors.secondary,
      textAlign: 'center',
      marginTop: 10,
    },
  });