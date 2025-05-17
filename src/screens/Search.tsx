import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import db from '../database/database';

type SearchScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
};

const Search: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <Text>to testando 2</Text>
  );
};

export default Search; 