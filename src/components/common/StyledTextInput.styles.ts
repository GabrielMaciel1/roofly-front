import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70, // Increased height
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: '#f5f4f8',
      marginBottom: 15,
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
