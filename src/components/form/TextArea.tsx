import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const TextArea = ({ placeholder, rows, value, onChangeText }: { placeholder: string, rows: number, value: string, onChangeText: (text: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TextInput
      style={[styles.input, { height: rows * 20 }]} // Approximate height based on rows
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      multiline
      numberOfLines={rows}
      value={value}
      onChangeText={onChangeText}
    />
  );
};