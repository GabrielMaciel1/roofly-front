import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createMessagesScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 50,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: colors.description,
    },
  });
