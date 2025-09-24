import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useLocationStore } from '../store/locationStore';
import api from '../utils/api';
import { Listing } from '../components/ListingCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const transformListingData = (data: any[]): Listing[] =>
  data.map(item => ({
    id: item.id,
    title: item.title,
    location: item.address,
    price: `R$${item.price.toLocaleString('pt-BR')}`,
    period: item.transactionType === 'Aluguel' ? '/mês' : '',
    rating: 4.5, // Placeholder for now
    image: item.photos && item.photos.length > 0 ? { uri: `data:image/jpeg;base64,${item.photos[0].data}` } : require('../../assets/casa.jpg'),
    type: item.propertyType === 'Casa' ? 'House' : 'Apartment',
  }));

const fetchPopularListings = async () => {
  const { data } = await api.get('/api/advertisements/popular');
  return data;
};

const fetchNearbyListings = async (lat: number, lon: number) => {
  const { data } = await api.get(`/api/advertisements/near-you?latitude=${lat}&longitude=${lon}`);
  return data;
};

const incrementViewCount = async (listingId: string) => {
  await api.post(`/api/advertisements/${listingId}/view`);
};

export const useHomeScreen = (navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>) => {
  const { location, locationErrorMsg, requestLocation } = useLocationStore();

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  const { data: popularListings, isLoading: isLoadingPopular } = useQuery({
    queryKey: ['popularListings'],
    queryFn: fetchPopularListings,
    select: transformListingData,
  });

  const { data: nearbyListings, isLoading: isLoadingNearby } = useQuery({
    queryKey: ['nearbyListings', location?.coords.latitude, location?.coords.longitude],
    queryFn: () => fetchNearbyListings(location!.coords.latitude, location!.coords.longitude),
    enabled: !!location,
    select: transformListingData,
  });

  const { mutate: incrementView } = useMutation({
    mutationFn: incrementViewCount,
    onError: (error) => {
      console.error('Error incrementing view count:', error);
      Alert.alert('Erro', 'Não foi possível registrar a visualização.');
    },
  });

  const handleListingPress = (listingId: string) => {
    incrementView(listingId);
    navigation.navigate('PropertyDetails', { propertyId: listingId });
  };

  const isLoading = isLoadingPopular || isLoadingNearby;

  return {
    locationErrorMsg,
    popularListings,
    nearbyListings,
    isLoading,
    handleListingPress,
  };
};
