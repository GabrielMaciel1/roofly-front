
import { StyleSheet } from 'react-native'
import { lightColors, darkColors } from '../theme/colors'

export const createRegisterStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 24,
      zIndex: 1,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#f5f4f8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'normal',
      textAlign: 'left',
      marginTop: 140,
      marginBottom: 5,
      color: colors.title
    },
    titleColored: {
      color: colors.button,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'left',
      color: colors.description,
      marginBottom: 40,
    },
    termsAndShowPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 30,
      marginTop: 10,
    },
    termsText: {
      fontSize: 14,
      color: colors.button,
      fontWeight: 'bold',
    },
    showPasswordText: {
      fontSize: 14,
      color: colors.button,
      fontWeight: 'bold',
    },
    inputField: {
      marginBottom: 16
    },
    inputInner: {
      height: 48,
      paddingHorizontal: 12,
      borderRadius: 8
    },
    error: {
      color: colors.secondary,
      fontSize: 12,
      marginBottom: 8,
      marginLeft: 4
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24
    },
    termsText: {
      flex: 1,
      fontSize: 12,
      color: colors.description,
      marginLeft: 8,
      lineHeight: 16
    },
    link: {
      color: colors.button,
      fontWeight: '600'
    },
    button: {
      backgroundColor: colors.button,
      height: 55,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    buttonDisabled: {
      opacity: 0.6
    },
    buttonText: {
      color: colors.card,
      fontSize: 18,
      fontWeight: 'bold',
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 30,
    },
    separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: colors.border,
    },
    separatorText: {
      marginHorizontal: 10,
      color: colors.description
    },
    socialLoginContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    socialButton: {
      width: 158,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: '#f5f4f8',
    },
    socialButtonMargin: {
      marginLeft: 10,
    },
    socialIcon: {
      width: 24,
      height: 24,
    },
    signInText: {
      fontSize: 14,
      textAlign: 'center',
      color: colors.description,
      marginTop: 20,
      marginBottom: 16
    },
    signInLink: {
      color: colors.button,
      fontWeight: '600'
    }
  })
