import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../../src/screens/CreateListingScreen.styles';

export const Stepper = ({ min, max, value, onValueChange }: { min: number, max: number, value: number, onValueChange: (value: number) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.stepperContainer}>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onValueChange(Math.max(min, value - 1))}>
        <Text style={styles.stepperButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.stepperValue}>{value}</Text>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onValueChange(Math.min(max, value + 1))}>
        <Text style={styles.stepperButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};