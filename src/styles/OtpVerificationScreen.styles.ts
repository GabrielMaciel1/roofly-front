import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createOtpVerificationStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingBottom: 120,
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
      color: colors.title,
      textAlign: 'left',
      marginTop: 140,
      marginBottom: 25,
    },
    titleColored: {
      color: colors.button,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      color: colors.description,
      textAlign: 'left',
      marginBottom: 85,
      lineHeight: 24,
    },
    emailText: {
      fontWeight: 'bold',
      color: colors.text,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    otpBox: {
      width: 70,
      height: 70,
      borderWidth: 0,
      borderRadius: 15,
      backgroundColor: '#f5f4f8',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
    bottomContainer: {
      alignItems: 'center',
    },
    timerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#f5f4f8',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginBottom: 25,
    },
    timerText: {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.text,
    },
    resendContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resendText: {
      fontSize: 15,
      color: colors.description,
    },
    resendLink: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.button,
    },
  });