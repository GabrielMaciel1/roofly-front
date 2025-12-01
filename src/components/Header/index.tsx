import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showSkipButton?: boolean;
  onSkipPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  onBackPress,
  showSkipButton = false,
  onSkipPress,
}) => {
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity onPress={onBackPress} style={styles.button}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonPlaceholder} />
      )}
      <Text style={styles.title}>{title}</Text>
      {showSkipButton ? (
        <TouchableOpacity onPress={onSkipPress} style={styles.button}>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonPlaceholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  button: {
    padding: 8,
  },
  buttonPlaceholder: {
    width: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default Header;
