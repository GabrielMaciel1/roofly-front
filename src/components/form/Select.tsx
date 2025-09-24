import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const Select = ({ placeholder, options, selectedValue, onValueChange }: { placeholder: string, options: string[], selectedValue: string, onValueChange: (value: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.selectContainer}>
      <Text style={styles.selectPlaceholder}>{placeholder}</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.selectOption, selectedValue === option && styles.selectOptionSelected]}
          onPress={() => onValueChange(option)}
        >
          <Text style={[styles.selectOptionText, selectedValue === option && styles.selectOptionTextSelected]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};