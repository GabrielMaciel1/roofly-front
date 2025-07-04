import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createMessagesScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: colors.card,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
