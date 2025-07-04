import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    listingCard: {
      width: 250,
      backgroundColor: colors.card,
      borderRadius: 24,
      marginRight: 18,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },
    listingImage: {
      width: '100%',
      height: 110,
    },
    listingInfo: {
      padding: 8,
      position: 'relative',
    },
    listingRatingContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 2,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
      zIndex: 1,
    },
    listingRatingText: {
      color: colors.text,
      fontSize: 13,
      fontWeight: 'bold',
    },
    listingTypeLabel: {
      backgroundColor: colors.card,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.button,
      paddingHorizontal: 8,
      paddingVertical: 4,
      alignSelf: 'flex-start',
      marginBottom: 8,
    },
    listingTypeLabelText: {
      color: colors.button,
      fontSize: 12,
      fontWeight: 'bold',
    },
    listingPriceContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 4,
      gap: 4,
    },
    listingPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.button,
    },
    listingPeriod: {
      fontSize: 13,
      color: colors.text,
      marginLeft: 2,
    },
    listingTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    listingLocationAndHeartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 0,
    },
    listingLocationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    listingLocationText: {
      fontSize: 13,
      color: colors.text,
    },
    heartIconContainer: {
      backgroundColor: colors.card,
      borderRadius: 15,
      padding: 6,
    },
  });
