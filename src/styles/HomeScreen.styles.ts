import { StyleSheet, StatusBar } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createHomeStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      height: '100%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 20,
      marginBottom: 20,
    },
    locationContainer: {
    },
    locationLabel: {
      fontSize: 14,
      color: colors.description,
      fontWeight: 'normal',
      marginBottom: 4,
    },
    locationText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.title,
    },
    notificationButton: {
      padding: 10,
      backgroundColor: colors.dot,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 12,
      marginLeft: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    searchInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.input,
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 50,
      marginRight: 12,
      justifyContent: 'space-between',
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: colors.description,
    },
    filterButton: {
      backgroundColor: colors.dot,
      borderRadius: 12,
      padding: 12,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    section: {
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      marginBottom: 14,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.title,
    },
    seeAllText: {
      fontSize: 15,
      color: colors.button,
      fontWeight: 'bold',
    },
    categoriesList: {
      paddingHorizontal: 24,
      marginBottom: 8,
    },
    categoryButton: {
      alignItems: 'center',
      marginRight: 20,
      width: 110,
      height: 130,
      backgroundColor: colors.card,
      borderRadius: 16,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    categoryIconContainer: {
      backgroundColor: colors.dot,
      borderRadius: 30,
      width: 60,
      height: 60,
      marginBottom: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryText: {
      fontSize: 15,
      color: colors.text,
      fontWeight: '600',
      width: '100%',
      textAlign: 'center',
    },
    listingsList: {
      paddingHorizontal: 24,
    },
  });