import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const AutoCompleteInput = ({ placeholder, mask, value, onChangeText }: { placeholder: string, mask: string, value: string, onChangeText: (text: string) => void }) => {
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