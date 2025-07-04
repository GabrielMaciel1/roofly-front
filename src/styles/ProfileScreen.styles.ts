import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createProfileScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: colors.card,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    userName: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
    },
    userEmail: {
      fontSize: 16,
      color: colors.description,
    },
    menuContainer: {
      marginTop: 20,
      paddingHorizontal: 15,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    menuText: {
      fontSize: 18,
      color: colors.text,
      marginLeft: 15,
    },
    menuIcon: {
      color: colors.text,
    },
    arrowIcon: {
      marginLeft: 'auto',
      color: colors.description,
    },
  });
