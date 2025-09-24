import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const Button = ({ title, onPress, variant }: { title: string, onPress: () => void, variant: string }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={[styles.button, variant === 'primary' && styles.primaryButton]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};