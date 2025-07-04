import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from './StyledTextInput.styles';

interface StyledTextInputProps extends TextInputProps {
  label: string;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ label, ...props }) => {
  const colors = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}<Text style={{ color: 'red' }}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.text}
        {...props}
      />
    </View>
  );
};

export default StyledTextInput;
