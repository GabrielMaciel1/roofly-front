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
      marginBottom: 28,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 9999,
      paddingHorizontal: 12,
      paddingVertical: 14,
      borderWidth: 1,
      borderColor: colors.border,
      gap: 8,
    },
    locationText: {
      fontSize: 14,
      fontWeight: 'normal',
      color: colors.title,
    },
    notificationButton: {
      padding: 10,
      backgroundColor: 'transparent',
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      position: 'relative',
      borderWidth: 1,
      borderColor: colors.border,
    },
    notificationButtonActiveBorder: {
      borderColor: '#8BC83F',
    },
    notificationDot: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: colors.card,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginLeft: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    avatarActiveBorder: {
      borderColor: '#8BC83F',
    },
    greetingContainer: {
      paddingHorizontal: 24,
      marginBottom: 28,
    },
    greetingText: {
      fontSize: 28,
      color: colors.title,
      marginBottom: 4,
    },
    subGreetingText: {
      fontSize: 24,
      color: colors.title,
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
      backgroundColor: colors.card,
      borderRadius: 14,
      paddingHorizontal: 16,
      height: 56,
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: 'transparent',
      elevation: 1, // Subtle elevation for Android
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: colors.title,
      marginHorizontal: 8,
    },
    separator: {
      width: 1,
      height: '60%',
      backgroundColor: colors.border,
      marginHorizontal: 8,
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
      gap: 12,
    },
    categoryButton: {
      alignItems: 'center',
      marginRight: 0,
      paddingHorizontal: 18,
      height: 40,
      backgroundColor: colors.card,
      borderRadius: 9999,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    categoryText: {
      fontSize: 15,
      color: colors.text,
      fontWeight: '600',
      textAlign: 'center',
    },
    listingsList: {
      paddingHorizontal: 24,
      paddingBottom: 10,
    },
  });
