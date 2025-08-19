// RegisterScreen.styles.ts
import { StyleSheet } from 'react-native'
import { lightColors, darkColors } from '../theme/colors'

export const createRegisterStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background
    },
    container: {
      paddingTop: 64,
      paddingHorizontal: 24
    },
    avatarContainer: {
      width: 130,
      height: 130,
      borderRadius: 65,
      backgroundColor: '#ECEFF1',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 24,
      borderWidth: 1,
      borderColor: colors.border,
      
    },
    avatarImage: {
      width: 110,
      height: 110,
      borderRadius: 55
    },
    avatarIcon: {
      color: colors.button,
      fontSize: 60
    },
    uploadText: {
      color: colors.button,
      fontSize: 14,
      marginTop: 4
    },
    editIconContainer: {
      position: 'absolute',
      bottom: -25,
      right: -25,
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: colors.button,
      justifyContent: 'center',
      alignItems: 'center'
    },
    editIcon: {
      color: colors.card,
      fontSize: 18
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 24,
      color: colors.title
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
      height: 48,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32
    },
    buttonDisabled: {
      opacity: 0.6
    },
    buttonText: {
      color: colors.card,
      fontSize: 16,
      fontWeight: '600'
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24
    },
    separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#CFD8DC'
    },
    separatorText: {
      marginHorizontal: 12,
      fontSize: 12,
      color: colors.description
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#CFD8DC',
      borderRadius: 8,
      height: 44,
      marginBottom: 16
    },
    socialButtonText: {
      marginLeft: 8,
      fontSize: 14,
      color: colors.text,
      fontWeight: '500'
    },
    signInText: {
      fontSize: 14,
      textAlign: 'center',
      color: colors.description,
      marginBottom: 16
    },
    signInLink: {
      color: colors.button,
      fontWeight: '600'
    }
  })
