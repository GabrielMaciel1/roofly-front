import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createRegisterStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 15,
      paddingTop: 15,
      backgroundColor: colors.background,
    },
    avatarContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.button,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 2,
    },
    avatarIcon: {
      color: colors.background,
      fontSize: 40,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
      color: colors.text,
    },
    inputField: {
      marginBottom: 2,
    },
    button: {
      backgroundColor: colors.primary,
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      marginBottom: 0,
    },
    buttonText: {
      color: colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
    },
    termsText: {
      color: colors.text,
      fontSize: 12,
      marginLeft: 5,
    },
    termsLink: {
      color: colors.primary,
      fontWeight: 'bold',
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10, // Increased margin
    },
    separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: colors.text,
      opacity: 0.3,
    },
    separatorText: {
      width: 150,
      textAlign: 'center',
      color: colors.text,
      opacity: 0.6,
      fontSize: 12,
    },
    socialButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10, // Increased margin
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      borderColor: colors.text,
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '48%',
    },
    socialButtonText: {
      marginLeft: 8,
      fontSize: 14,
      color: colors.text,
    },
    link: {
      color: colors.primary,
      textAlign: 'center',
      marginTop: 10, // Increased margin
      fontSize: 14,
    },
  });