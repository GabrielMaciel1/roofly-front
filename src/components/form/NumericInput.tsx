import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const NumericInput = ({ placeholder, unit, value, onChangeText }: { placeholder: string, unit: string, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={styles.input}
      placeholder={`${placeholder} (${unit})`}
      placeholderTextColor={colors.textSecondary}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};