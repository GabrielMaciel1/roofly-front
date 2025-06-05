import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

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
      marginBottom: 30,
      color: colors.title,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: colors.dot,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: colors.card,
      color: colors.text,
    },
    button: {
      backgroundColor: colors.button,
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      color: colors.title,
      textAlign: 'center',
      marginTop: 10,
    },
  }); 