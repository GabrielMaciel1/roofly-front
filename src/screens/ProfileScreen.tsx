import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { profileScreenStyles } from '../styles/ProfileScreen.styles';

export default function ProfileScreen() {
  return (
    <View style={profileScreenStyles.container}>
      <Text style={profileScreenStyles.title}>Perfil</Text>
    </View>
  );
}