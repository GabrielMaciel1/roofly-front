import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

const { width } = Dimensions.get('window');

export const createSearchStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    searchCardTop: {
      position: 'absolute',
      top: Platform.OS === 'android' ? StatusBar.currentHeight || 10 : 40,
      alignSelf: 'center',
      width: width - 32,
      borderRadius: 24,
      padding: 18,
      borderWidth: 1.5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      elevation: 8,
    },
    listingsCardBottom: {
      position: 'absolute',
      bottom: 0,
      width: width,
      paddingHorizontal: 24,
      paddingVertical: 18,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderWidth: 1.5,
      borderColor: 'transparent',
      borderTopColor: colors.border,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      elevation: 8,
    },
    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.06)',
      borderRadius: 16,
      paddingHorizontal: 12,
      height: 44,
      marginBottom: 4,
    },
    input: {
      flex: 1,
      fontSize: 15,
      marginLeft: 8,
    },
    filterButton: {
      backgroundColor: colors.button,
      borderRadius: 12,
      padding: 8,
      marginLeft: 8,
    },
    autocomplete: {
      maxHeight: 120,
      borderRadius: 12,
      borderWidth: 1,
      marginTop: 4,
      marginBottom: 4,
      overflow: 'hidden',
    },
    listingCard: {
      width: 150, // Ajustar largura conforme necessário
      borderRadius: 16,
      padding: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  }); 