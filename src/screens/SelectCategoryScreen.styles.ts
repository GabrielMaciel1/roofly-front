import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingTop: 50,
      paddingHorizontal: 16,
      paddingBottom: 10,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    backButtonText: {
      color: colors.text,
      fontSize: 18,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 20,
    },
    highlight: {
      color: colors.button,
    },
    categoryItem: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    categoryText: {
      fontSize: 16,
      color: colors.text,
    },
  });
