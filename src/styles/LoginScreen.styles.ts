import { StyleSheet, Dimensions } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

const { width } = Dimensions.get('window');

export const createLoginStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginTop: 30,
    },
    contentContainer: {
      flex: 1,
      padding: 25,
      justifyContent: 'space-between',
    },
    
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.title,
      marginBottom: 10,
    },
    titleColored: {
      color: colors.button,
    },
    subtitle: {
      fontSize: 16,
      color: colors.description,
      marginBottom: 30,
    },
    forgotPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    forgotPasswordText: {
      fontSize: 14,
      color: colors.button,
      fontWeight: 'bold',
    },
    showPasswordText: {
        fontSize: 14,
        color: colors.button,
        fontWeight: 'bold',
    },
    loginButton: {
      backgroundColor: colors.button,
      height: 55,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    loginButtonText: {
      color: colors.buttonText,
      fontSize: 18,
      fontWeight: 'bold',
    },
    separatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    separatorLine: {
      flex: 1,
      height: 1,
      backgroundColor: colors.border,
    },
    separatorText: {
      marginHorizontal: 10,
      color: colors.description,
    },
    socialLoginContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    socialButton: {
      width: 158, // Fixed width
      height: 70, // Increased height
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20, // Less rounded
      backgroundColor: '#f5f4f8',
    },
    socialButtonMargin: {
      marginLeft: 10,
    },
    socialIcon: {
      width: 24,
      height: 24,
    },
    registerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    registerText: {
      fontSize: 14,
      color: colors.text,
    },
    registerLink: {
      fontSize: 14,
      color: colors.button,
      fontWeight: 'bold',
      marginLeft: 5,
    },
  });
