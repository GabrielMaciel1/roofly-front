import React from 'react';
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
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { createHomeStyles } from '../styles/HomeScreen.styles';
import ListingCard from '../components/ListingCard';
import NoListingsFound from '../components/NoListingsFound';
import { useHomeScreen } from '../hooks/useHomeScreen';
import { useState } from 'react';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createHomeStyles(colors);
  const { locationErrorMsg, popularListings, nearbyListings, isLoading, handleListingPress } = useHomeScreen(navigation);
  const [hasNotification, setHasNotification] = useState(true); // Placeholder for notification state

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.button} />
      </View>
    );
  }

  const categories = [
    { name: 'All', icon: 'apps' as const },
    { name: 'House', icon: 'home' as const },
    { name: 'Apartment', icon: 'office-building' as const },
    { name: 'Villa', icon: 'home-city' as const },
  ];

  const renderCategoryItem = (category: typeof categories[0], index: number) => (
    <TouchableOpacity
      key={category.name}
      style={[
        styles.categoryButton,
        index === 0 && { backgroundColor: colors.button, borderColor: colors.button },
      ]}
    >
      <Text
        style={[
          styles.categoryText,
          index === 0 && { color: colors.card },
        ]}
      >
        {category.name}
      </Text>
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
          <TouchableOpacity style={styles.locationContainer}>
            <MaterialCommunityIcons name="map-marker" size={20} color={colors.button} style={{ marginRight: 4 }} />
            <Text style={styles.locationText}>Jakarta, Indonesia</Text>
            <MaterialCommunityIcons name="chevron-down" size={20} color={colors.text} style={{ marginLeft: 4 }} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.notificationButton, hasNotification && styles.notificationButtonActiveBorder]}>
              <MaterialCommunityIcons name="bell-outline" size={24} color={colors.title} />
              {hasNotification && <View style={styles.notificationDot} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../../assets/perfil.jpeg')} style={[styles.avatar, hasNotification && styles.avatarActiveBorder]} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hey, <Text style={{ fontWeight: '800', color: colors.button }}>Jonathan!</Text></Text>
          <Text style={styles.subGreetingText}>Let's start exploring</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search House, Apartment, etc"
              placeholderTextColor={colors.description}
            />
            <View style={styles.separator} />
            <MaterialCommunityIcons name="microphone" size={20} color={colors.description} />
          </View>
        </View>

        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
            {categories.map(renderCategoryItem)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Estates</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          {popularListings && popularListings.length > 0 ? (
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
            <Text style={styles.sectionTitle}>Nearby Listings</Text>
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
          ) : nearbyListings && nearbyListings.length > 0 ? (
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