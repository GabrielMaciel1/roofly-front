import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Alert
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';
import { createHomeStyles } from '../styles/HomeScreen.styles';
import ListingCard, { Listing } from '../components/ListingCard';
import NoListingsFound from '../components/NoListingsFound';
import * as Location from 'expo-location';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createHomeStyles(colors);

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationErrorMsg, setLocationErrorMsg] = useState<string | null>(null);

  const [popularListings, setPopularListings] = useState<Listing[]>([]);
  const [nearbyListings, setNearbyListings] = useState<Listing[]>([]);

  const transformListingData = (data: any[]): Listing[] =>
    data.map(item => ({
      id: item.id,
      title: item.title,
      location: item.address,
      price: `R${item.price.toLocaleString('pt-BR')}`,
      period: item.transactionType === 'Aluguel' ? '/mês' : '',
      rating: 4.5, // Placeholder for now
      image: item.photos && item.photos.length > 0 ? { uri: `data:image/jpeg;base64,${item.photos[0].data}` } : require('../../assets/casa.jpg'),
      type: item.propertyType === 'Casa' ? 'House' : 'Apartment',
    }));

  

  useEffect(() => {
    const fetchPopularListings = async () => {
      try {
        const response = await api.get('/api/advertisements/popular');
        if (response.status === 200 && Array.isArray(response.data)) {
          setPopularListings(transformListingData(response.data));
        }
      } catch (err) {
        console.error('Error fetching popular listings:', err);
      }
    };

    const fetchNearbyListings = async (lat: number, lon: number) => {
      try {
        const response = await api.get(`/api/advertisements/near-you?latitude=${lat}&longitude=${lon}`);
        if (response.status === 200 && Array.isArray(response.data)) {
          setNearbyListings(transformListingData(response.data));
        }
      } catch (err) {
        console.error('Error fetching nearby listings:', err);
      }
    };

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationErrorMsg('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      await fetchNearbyListings(currentLocation.coords.latitude, currentLocation.coords.longitude);
      await fetchPopularListings();
      setLoading(false);
    })();
  }, []);

  const handleListingPress = async (listingId: string) => {
    try {
      await api.post(`/api/advertisements/${listingId}/view`);
      navigation.navigate('PropertyDetails', { propertyId: listingId });
    } catch (error) {
      console.error('Error incrementing view count:', error);
      Alert.alert('Erro', 'Não foi possível registrar a visualização.');
      navigation.navigate('PropertyDetails', { propertyId: listingId }); // Navigate anyway
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.button} />
      </View>
    );
  }

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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialCommunityIcons name="bell" size={24} color={colors.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../../assets/perfil.jpeg')} style={styles.avatar} />
            </TouchableOpacity>
          </View>
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
          {popularListings.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
              {popularListings.map(listing => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onPress={() => handleListingPress(listing.id)}
                  style={{ marginRight: 16 }}
                />
              ))}
            </ScrollView>
          ) : (
            <NoListingsFound
              imageSource={require('../../assets/icon_empty_house_sleep.png')}
              mainMessage="Ops! Ainda não há sugestões por aqui."
              subMessage="Explore as categorias acima"
              imageSize={120}
            />
          )}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos de você</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          {locationErrorMsg ? (
            <NoListingsFound
              imageSource={require('../../assets/icon_empty_location_sleep.png')}
              mainMessage="Não foi possível obter sua localização."
              subMessage={locationErrorMsg}
              imageSize={120}
            />
          ) : nearbyListings.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
              {nearbyListings.map(listing => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onPress={() => handleListingPress(listing.id)}
                  style={{ marginRight: 16 }}
                />
              ))}
            </ScrollView>
          ) : (
            <NoListingsFound
              imageSource={require('../../assets/icon_empty_house_sleep.png')}
              mainMessage="Não há imóveis nas proximidades no momento"
              subMessage="Explore outras regiões ou ajuste seus filtros."
              imageSize={120}
            />
          )}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
