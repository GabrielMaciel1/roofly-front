import { StyleSheet } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors';

export const createHomeStyles = (colors: typeof lightColors | typeof darkColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.title,
      margin: 20,
    },
    // Adicione outros estilos conforme necessário para os elementos da HomeScreen
  }); 