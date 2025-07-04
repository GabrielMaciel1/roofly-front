import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createSavedScreenStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    highlightsContainer: {
      marginBottom: 70,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: colors.background,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '95%',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
      color: colors.text,
    },
    viewMore: {
      color: colors.button,
      fontWeight: 'bold',
    },
    noFavoritesContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    noFavoritesText: {
      fontSize: 18,
      color: colors.description,
      textAlign: 'center',
    },
  });
