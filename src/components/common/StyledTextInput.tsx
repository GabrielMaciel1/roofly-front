import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from './StyledTextInput.styles';
import Ionicons from '@expo/vector-icons/Ionicons'; // Assuming @expo/vector-icons is available

interface StyledTextInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ label, isPassword, secureTextEntry, ...props }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.text}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color={colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default StyledTextInput;
