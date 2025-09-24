import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from './StyledTextInput.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Changed from Ionicons

interface StyledTextInputProps extends TextInputProps {
  iconName: keyof typeof MaterialCommunityIcons['glyphMap']; // Added iconName
  isPassword?: boolean;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ iconName, isPassword, secureTextEntry, ...props }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <View style={styles.inputWrapper}>
      <MaterialCommunityIcons name={iconName} size={22} color={colors.description} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.description} // Changed to colors.description for grey-balery medium
        secureTextEntry={isPassword && !showPassword}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color={colors.text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StyledTextInput;