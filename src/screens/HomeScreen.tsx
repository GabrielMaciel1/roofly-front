import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { api } from '../utils/api';
import useTheme from '../theme/useTheme';
import { createHomeStyles } from '../styles/HomeScreen.styles';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createHomeStyles(colors);

  const transformListingData = (data: any[]) => {
    return data.map(item => ({
      id: item.id,
      title: item.titulo,
      location: `${item.endereco.cidade}, ${item.endereco.estado}`,
      price: `R$${item.preco.toLocaleString('pt-BR')}`,
      period: item.tipo === 'Aluguel' ? '/mês' : '',
      rating: 4.5,
      image: item.fotos[0],
      type: item.imovelType === 'Casa' ? 'House' : 'Apartment',
    }));
  };

  const allListings = transformListingData([...api]);
  const popularListings = allListings.slice(0, 3);
  const nearbyListings = allListings.slice(3, 6);

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
        <MaterialCommunityIcons name={category.icon} size={24} color={colors.title} />
      </View>
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  );

  const renderListingCard = (listing: typeof popularListings[0]) => (
    <TouchableOpacity key={listing.id} style={styles.listingCard}>
      <Image source={listing.image} style={styles.listingImage} />
      <View style={styles.listingInfo}>
        <View style={styles.listingRatingContainer}>
          <Text style={styles.listingRatingText}>{listing.rating}</Text>
        </View>
        <Text style={styles.listingType}>{listing.type}</Text>
        <View style={styles.listingPriceContainer}>
          <Text style={styles.listingPrice}>{listing.price}</Text>
          <Text style={styles.listingPeriod}>{listing.period}</Text>
        </View>
        <Text style={styles.listingTitle}>{listing.title}</Text>
        <View style={styles.listingLocationContainer}>
          <MaterialCommunityIcons name="map-marker" size={14} color={colors.description} />
          <Text style={styles.listingLocationText}>{listing.location}</Text>
        </View>
        <TouchableOpacity style={styles.heartIconContainer}>
          <MaterialCommunityIcons name="heart-outline" size={20} color={colors.description} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={colors.text === '#fff' ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons name="map-marker" size={20} color={colors.text} />
            <View>
              <Text style={styles.locationLabel}>Localização</Text>
              <Text style={styles.locationText}>Fortaleza, CE</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialCommunityIcons name="bell-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              placeholderTextColor={colors.description}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons name="tune" size={24} color={colors.buttonText} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categorias</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
            {categories.map(renderCategoryItem)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Populares</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {popularListings.map(renderListingCard)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos de você</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {nearbyListings.map(renderListingCard)}
          </ScrollView>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;