import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerImage: {
      width: 400,
      height: 250,
      resizeMode: 'cover',
    },
    contentContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    location: {
      fontSize: 16,
      color: colors.description,
      marginBottom: 16,
    },
    detailsRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 16,
    },
    price: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.secondary,
      marginRight: 4,
    },
    period: {
      fontSize: 16,
      color: colors.description,
    },
    ownerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.border,
    },
    ownerImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    ownerName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    ownerRole: {
      fontSize: 14,
      color: colors.description,
    },
    callButton: {
      backgroundColor: colors.button,
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
      marginLeft: 'auto',
    },
    callButtonText: {
      color: colors.buttonText,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 20,
    },
    mapContainer: {
      height: 200,
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    errorText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 18,
      color: colors.text,
    },
  });
