import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60, // Increased height
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: '#f5f4f8',
    },
    icon: {
      marginRight: 10,
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
