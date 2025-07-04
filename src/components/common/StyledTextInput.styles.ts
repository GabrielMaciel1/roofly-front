import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
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
      borderColor: colors.primary,
      borderRadius: 50,
      paddingHorizontal: 15,
      backgroundColor: colors.background,
      color: colors.text,
    },
  });
