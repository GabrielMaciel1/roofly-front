import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createLoginStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      paddingTop: 0,
      backgroundColor: colors.background
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 0,
    },
    logoCircle: {
      width: 220,
      height: 220,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoImage: {
      width: '80%',
      height: '80%',
    },
    signUpTitle: {
      color: colors.text,
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      color: colors.text,
      fontSize: 14,
      marginBottom: 10,
      marginLeft: 15,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: colors.dot,
      borderRadius: 50,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: colors.card,
      color: colors.text,
    },
    rememberMeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    checkbox: {
      marginRight: 8,
    },
    rememberMeText: {
      color: colors.text,
      fontSize: 14,
    },
    forgotPasswordText: {
      color: colors.secondary,
      fontSize: 16,
      marginTop: 10,
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: colors.button,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      color: colors.description,
      textAlign: 'center',
      marginVertical: 12,
    },
    socialRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 18,
      marginHorizontal: 4,
      flex: 1,
      justifyContent: 'center',
    },
    socialButtonText: {
      color: colors.text,
      fontSize: 15,
      marginLeft: 8,
    },
    footerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    footerText: {
      color: colors.text,
      fontSize: 14,
    },
    footerLink: {
      color: colors.button,
      fontSize: 14,
      marginLeft: 2,
      textDecorationLine: 'underline',
    },
  });