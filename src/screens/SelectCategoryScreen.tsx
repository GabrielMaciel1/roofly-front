import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { createStyles } from './SelectCategoryScreen.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type SelectCategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectCategory'>;

const SelectCategoryScreen: React.FC = () => {
  const colors = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation<SelectCategoryScreenNavigationProp>();

  const categories = [
    "Apartamentos",
    "Casas",
    "Aluguel de quartos",
    "Temporada",
    "Terrenos, sítios e fazendas",
    "Comércio e indústria",
  ];

  const handleCategorySelect = (category: string) => {
    navigation.navigate('CreateListing', { selectedCategory: category });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>
          Seu anúncio, mais rápido com <Text style={styles.highlight}>inteligência artificial</Text>. Escolha o que quer anunciar.
        </Text>
        {
          categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => handleCategorySelect(category)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default SelectCategoryScreen;
