import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const categories = [
    { name: 'House', icon: '🏡' },
    { name: 'Villa', icon: '🏘️' },
    { name: 'Apartment', icon: '🏢' },
  ];

  const popularListings = [
    {
      id: '1',
      title: 'Owent Apartment',
      location: 'Surabaya, Indonesia',
      price: '$1,800',
      period: '/month',
      rating: 4.5,
      image: 'https://via.placeholder.com/150',
      type: 'Apartment',
    },
    {
      id: '2',
      title: 'Semie Apartment',
      location: 'Surabaya, Indonesia',
      price: '$1,700',
      period: '/month',
      rating: 4.0,
      image: 'https://via.placeholder.com/150',
      type: 'Apartment',
    },
     {
      id: '3',
      title: 'Modern House',
      location: 'Surabaya, Indonesia',
      price: '$2,500',
      period: '/month',
      rating: 4.8,
      image: 'https://via.placeholder.com/150',
      type: 'House',
    },
  ];

  const nearbyListings = [
     {
      id: '4',
      title: 'Beautiful Villa',
      location: 'Surabaya, Indonesia',
      price: '$3,000',
      period: '/month',
      rating: 4.9,
      image: 'https://via.placeholder.com/150',
      type: 'Villa',
    },
    {
      id: '5',
      title: 'Cozy Apartment',
      location: 'Surabaya, Indonesia',
      price: '$1,500',
      period: '/month',
      rating: 4.3,
      image: 'https://via.placeholder.com/150',
      type: 'Apartment',
    },
     {
      id: '6',
      title: 'Luxury House',
      location: 'Surabaya, Indonesia',
      price: '$4,000',
      period: '/month',
      rating: 5.0,
      image: 'https://via.placeholder.com/150',
      type: 'House',
    },
  ];

  const renderCategoryItem = (category: typeof categories[0]) => (
    <TouchableOpacity key={category.name} style={styles.categoryButton}>
      <View style={styles.categoryIconContainer}>
        <Text style={styles.categoryIcon}>{category.icon}</Text>
      </View>
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  );

  const renderListingCard = (listing: typeof popularListings[0]) => (
    <TouchableOpacity key={listing.id} style={styles.listingCard}>
      <Image source={{ uri: listing.image }} style={styles.listingImage} />
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
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.listingLocationText}>{listing.location}</Text>
        </View>
        <TouchableOpacity style={styles.heartIconContainer}>
            <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <View>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.locationText}>Surabaya, Indonesia</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
             <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
             <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
            {categories.map(renderCategoryItem)}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {popularListings.map(renderListingCard)}
          </ScrollView>
        </View>

         <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby your location</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listingsList}>
            {nearbyListings.map(renderListingCard)}
          </ScrollView>
        </View>

        <View style={{ height: 20 }} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
     fontSize: 20,
     marginRight: 8,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
     fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
   searchIcon: {
      fontSize: 20,
      marginRight: 8,
      color: '#888',
   },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
   filterIcon: {
      fontSize: 24,
      color: '#fff',
   },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007bff',
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIconContainer: {
    backgroundColor: '#e0eaff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
   categoryIcon: {
      fontSize: 24,
   },
  categoryText: {
    fontSize: 14,
    color: '#555',
  },
  listingsList: {
    paddingHorizontal: 16,
  },
  listingCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  listingImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listingInfo: {
    padding: 10,
     position: 'relative',
  },
   listingRatingContainer: {
       position: 'absolute',
       top: -110,
       right: 10,
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
       borderRadius: 5,
       paddingHorizontal: 5,
       paddingVertical: 2,
   },
   listingRatingText: {
       color: '#fff',
       fontSize: 12,
       fontWeight: 'bold',
   },
  listingType: {
    fontSize: 12,
    color: '#007bff',
    marginBottom: 4,
  },
   listingPriceContainer: {
       flexDirection: 'row',
       alignItems: 'baseline',
       marginBottom: 4,
   },
  listingPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  listingPeriod: {
    fontSize: 12,
    color: '#555',
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
   listingLocationContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 8,
   },
   locationIcon: {
       fontSize: 14,
       marginRight: 4,
       color: '#888',
   },
  listingLocationText: {
    fontSize: 12,
    color: '#888',
  },
   heartIconContainer: {
       position: 'absolute',
       bottom: 10,
       right: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 5,
         shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
   },
   heartIcon: {
       fontSize: 20,
       color: '#888',
   }
});

export default HomeScreen;