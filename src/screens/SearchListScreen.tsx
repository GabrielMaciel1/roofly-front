import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSearchScreen } from '../hooks/useSearchScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useThemeContext } from '../contexts/ThemeContext';
import { createSearchListStyles } from '../styles/SearchListScreen.styles';

type SearchListScreenProps = NativeStackScreenProps<RootStackParamList, 'SearchList'>;

const SearchListScreen: React.FC<SearchListScreenProps> = ({ navigation }) => {
  const { colors } = useThemeContext();
  const styles = createSearchListStyles(colors);
  const {
    search,
    setSearch,
    nearbyListings,
  } = useSearchScreen();

  const renderListItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Image source={{ uri: item.fotos[0] }} style={styles.resultImage} />
      <View style={styles.resultTextContainer}>
        <Text style={[styles.resultTitle, { color: colors.text }]}>{item.titulo}</Text>
        <Text style={[styles.resultLocation, { color: colors.description }]}>{`${item.endereco.cidade}, ${item.endereco.estado}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Search</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <MaterialCommunityIcons name="magnify" size={20} color={colors.description} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Surabaya"
          placeholderTextColor={colors.description}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="tune" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.currentLocationButton}>
        <MaterialCommunityIcons name="crosshairs-gps" size={20} color={colors.primary} />
        <Text style={[styles.currentLocationText, { color: colors.primary }]}>Or use my current location</Text>
      </TouchableOpacity>

      <View style={styles.resultsHeader}>
        <Text style={[styles.resultsHeaderText, { color: colors.text }]}>Search Results</Text>
        <Text style={[styles.resultsCountText, { color: colors.description }]}>{nearbyListings.length} found</Text>
      </View>

      {nearbyListings.length > 0 ? (
        <FlatList
          data={nearbyListings}
          renderItem={renderListItem}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContentContainer}
        />
      ) : (
        <View style={styles.notFoundContainer}>
            <View style={[styles.notFoundIconContainer, { backgroundColor: colors.card }]}>
                <MaterialCommunityIcons name="emoticon-sad-outline" size={60} color={colors.primary} />
            </View>
            <Text style={[styles.notFoundTitle, { color: colors.text }]}>The place doesn't exist</Text>
            <Text style={[styles.notFoundSubtitle, { color: colors.description }]}>Please enable your location services for more optimal result.</Text>
        </View>
      )}
    </View>
  );
};

export default SearchListScreen;