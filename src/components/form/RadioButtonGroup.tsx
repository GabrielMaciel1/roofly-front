import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const RadioButtonGroup = ({ options, selectedValue, onValueChange }: { options: string[], selectedValue: string, onValueChange: (value: string) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.radioGroupContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.radioButton, selectedValue === option && styles.radioButtonSelected]}
          onPress={() => onValueChange(option)}
        >
          <Text style={[styles.radioButtonText, selectedValue === option && styles.radioButtonTextSelected]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};