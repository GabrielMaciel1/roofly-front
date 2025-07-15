import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

interface NoListingsFoundProps {
  iconName: string;
  message: string;
}

const NoListingsFound: React.FC<NoListingsFoundProps> = ({ iconName, message }) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      minHeight: 150, // Garante que o componente tenha uma altura mínima para ser visível
    },
    icon: {
      marginBottom: 10,
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      color: colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName as any} size={50} color={colors.button} style={styles.icon} />
      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
};

export default NoListingsFound;
