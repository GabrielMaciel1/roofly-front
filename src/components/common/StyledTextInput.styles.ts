import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    label: {
      color: colors.text,
      fontSize: 14,
      marginBottom: 8,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: colors.background,
    },
    input: {
      flex: 1,
      color: colors.text,
      paddingRight: 10,
    },
    eyeIcon: {
      padding: 5,
    },
  });
