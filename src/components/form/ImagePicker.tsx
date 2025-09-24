import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { createStyles } from '../../screens/CreateListingScreen.styles';

export const ImagePicker = ({ max, onSelectImages }: { max: number, onSelectImages: (images: any[]) => void }) => {
  const colors = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={styles.imagePickerButton} onPress={() => Alert.alert('ImagePicker', 'Simulando seleção de imagens')}>
      <MaterialCommunityIcons name="camera-plus" size={40} color={colors.button} />
      <Text style={[styles.imagePickerText, { color: colors.button }]}>Adicione de 1 até {max} imagens do imóvel.</Text>
    </TouchableOpacity>
  );
};