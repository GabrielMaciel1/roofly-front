import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const CurrencyInput = ({ placeholder, value, onChangeText }: { placeholder: string, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};