import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RangeSlider from '@react-native-community/slider';
import { useThemeContext } from '../contexts/ThemeContext';
import { createFilterStyles } from '../styles/FilterScreen.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterScreenProps = NativeStackScreenProps<RootStackParamList, 'Filter'>;

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  const { colors } = useThemeContext();
  const styles = createFilterStyles(colors);
  const [buyOrSell, setBuyOrSell] = useState('buy');
  const [propertyType, setPropertyType] = useState('apartment');
  const [priceRange, setPriceRange] = useState([400, 3400]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, buyOrSell === 'buy' ? styles.activeButton : {}]} 
            onPress={() => setBuyOrSell('buy')}>
            <Text style={[styles.toggleButtonText, {color: buyOrSell === 'buy' ? '#fff' : colors.text}]}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleButton, buyOrSell === 'sell' ? styles.activeButton : {}]} 
            onPress={() => setBuyOrSell('sell')}>
            <Text style={[styles.toggleButtonText, {color: buyOrSell === 'sell' ? '#fff' : colors.text}]}>Sell</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Type</Text>
        <View style={styles.propertyTypeContainer}>
            {['House', 'Villa', 'Apartment'].map(type => (
                <TouchableOpacity 
                    key={type} 
                    style={[styles.propertyType, {backgroundColor: propertyType === type.toLowerCase() ? colors.primary : colors.card}]} 
                    onPress={() => setPropertyType(type.toLowerCase())}>
                    <MaterialCommunityIcons name={type === 'House' ? 'home' : type === 'Villa' ? 'home-city' : 'office-building'} size={30} color={propertyType === type.toLowerCase() ? '#fff' : colors.text} />
                    <Text style={styles.propertyTypeText}>{type}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <Text style={styles.sectionTitle}>Price Range</Text>
        <View style={styles.priceRangeContainer}>
            <Text style={styles.priceRangeText}>${priceRange[0]} - ${priceRange[1]}</Text>
        </View>
        <View style={styles.graphPlaceholder} />
        <RangeSlider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={5000}
            min={priceRange[0]}
            max={priceRange[1]}
            onValuesChange={(values) => setPriceRange(values)}
            thumbTintColor={colors.primary}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor={colors.border}
        />

        <Text style={styles.sectionTitle}>Area (sqft)</Text>
        <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>Min</Text>
                </View>
                <Text style={styles.inputSeparator}>-</Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>Max</Text>
                </View>
            </View>
        </View>

        <Text style={styles.sectionTitle}>Plot Area (sqft)</Text>
        <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>Min</Text>
                </View>
                <Text style={styles.inputSeparator}>-</Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>Max</Text>
                </View>
            </View>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterScreen;