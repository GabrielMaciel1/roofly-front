import { StyleSheet, Dimensions } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

const { width } = Dimensions.get('window');

export const createCarouselStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    slide: {
      width,
      alignItems: 'center',
    },
    image: {
      width,
      height: '70%',
      resizeMode: 'cover',
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
    },
    card: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%',
      borderRadius: 24,
      paddingVertical: 28,
      paddingHorizontal: 24,
      alignItems: 'center',
      backgroundColor: colors.card,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      justifyContent: 'center',
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold',
      color: colors.title,
      textAlign: 'center',
      marginBottom: 12,
    },
    description: {
      fontSize: 14,
      color: colors.description,
      textAlign: 'center',
      marginBottom: 18,
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 18,
    },
    dot: {
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
    skip: {
      color: colors.title,
      fontSize: 16,
      marginBottom: 12,
      marginTop: 4,
    },
    nextButton: {
      backgroundColor: colors.button,
      borderRadius: 24,
      paddingVertical: 12,
      width: '100%',
      alignItems: 'center',
    },
    nextText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: 'bold',
    },
  }); 