import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createHomeStyles } from '../styles/HomeScreen.styles';
import ListingCard, { Listing } from '../components/ListingCard';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createHomeStyles(colors);

  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  const transformListingData = (data: any[]): Listing[] =>
    data.map(item => ({
      id: item.id,
      title: item.titulo,
      location: `${item.endereco.cidade}, ${item.endereco.estado}`,
      price: `R$${item.preco.toLocaleString('pt-BR')}`,
      period: item.tipo === 'Aluguel' ? '/mês' : '',
      rating: 4.5,
      image: item.fotos[0],
      type: item.imovelType === 'Casa' ? 'House' : 'Apartment',
    }));

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get('/api/listings');
        if (response.status === 200 && Array.isArray(response.data)) {
          setListings(transformListingData(response.data));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.button} />
      </View>
    );
  }

  const popularListings = listings.slice(0, 3);
  const nearbyListings = listings.slice(3, 6);

  const categories = [
    { name: 'Casa', icon: 'home' as const },
    { name: 'Apartamento', icon: 'office-building' as const },
    { name: 'Villa', icon: 'home-city' as const },
    { name: 'Temporada', icon: 'beach' as const },
    { name: 'Sítio', icon: 'tree' as const },
    { name: 'Comercial', icon: 'domain' as const },
  ];

  const renderCategoryItem = (category: typeof categories[0]) => (
    <TouchableOpacity key={category.name} style={styles.categoryButton}>
      <View style={styles.categoryIconContainer}>
        <MaterialCommunityIcons name={category.icon} size={24} color={colors.button} />
      </View>
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={colors.text === '#FFFFFF' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Location</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="map-marker" size={20} color={colors.button} style={{ marginRight: 4 }} />
              <Text style={styles.locationText}>Surabaya, Indonesia</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} color={colors.text} style={{ marginLeft: 4 }} />
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color={colors.button} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={colors.description}
            />
            <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons name="filter-variant" size={24} color={colors.button} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
            {categories.map(renderCategoryItem)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Populares</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {popularListings.map(listing => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onPress={() => navigation.navigate('PropertyDetails', { propertyId: listing.id })}
                style={{ marginRight: 16 }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos de você</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {nearbyListings.map(listing => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onPress={() => navigation.navigate('PropertyDetails', { propertyId: listing.id })}
                style={{ marginRight: 16 }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
