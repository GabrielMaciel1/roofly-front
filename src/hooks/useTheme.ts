import { useColorScheme } from 'react-native';

const lightColors = {
  primary: '#007BFF',
  secondary: '#6C757D',
  background: '#F8F9FA',
  text: '#212529',
  dot: '#E5EDFB',
};

const darkColors = {
  primary: '#66B2FF',
  secondary: '#ADB5BD',
  background: '#343A40',
  text: '#F8F9FA',
  dot: '#1A2B4D',
};

const useTheme = () => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
};

export default useTheme;
