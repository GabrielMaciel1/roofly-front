import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';

export default function useTheme() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
} 