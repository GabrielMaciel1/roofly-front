import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const createStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    listingCard: {
      width: 180,
      backgroundColor: colors.card,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },
    listingImage: {
      width: '100%',
      height: 120,
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 120,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: 8,
    },
    listingRatingContainer: {
      backgroundColor: colors.card,
      borderRadius: 8,
      paddingHorizontal: 6,
      paddingVertical: 2,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
      zIndex: 1,
    },
    listingRatingText: {
      color: colors.text,
      fontSize: 12,
      fontWeight: 'bold',
    },
    listingInfo: {
      padding: 8,
    },
    listingPriceContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 2,
      gap: 4,
    },
    listingPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.title,
    },
    listingPeriod: {
      fontSize: 11,
      color: colors.text,
      marginLeft: 2,
    },
    listingTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.title,
      marginBottom: 2,
    },
    listingLocationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
    },
    listingLocationText: {
      fontSize: 11,
      color: colors.text,
    },
    heartIconContainer: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: 8,
      padding: 4,
    },
  });
