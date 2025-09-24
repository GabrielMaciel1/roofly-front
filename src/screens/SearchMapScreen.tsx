import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useSearchScreen } from '../hooks/useSearchScreen'
import ListingCard from '../components/ListingCard'
import { createSearchMapStyles } from '../styles/SearchMapScreen.styles'
import { useTheme } from '../contexts/ThemeContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'

type SearchMapScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>

const SearchMapScreen: React.FC<SearchMapScreenProps> = ({ navigation }) => {
  const colors = useTheme()
  const styles = createSearchMapStyles(colors)
  const { location, region, setRegion, nearbyListings, bottomSheetRef } = useSearchScreen()
  const featuredListing = nearbyListings.length > 0 ? nearbyListings[0] : null
  const snapPoints = useMemo(() => [400], [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, paddingBottom: 70 }}
        region={region}
        showsUserLocation
        onRegionChangeComplete={setRegion}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Você"
          >
            <View style={styles.userMarker}>
              <MaterialCommunityIcons name="account" size={20} color="#fff" />
            </View>
          </Marker>
        )}
        {nearbyListings.map(item => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.lat, longitude: item.lng }}
            title={item.titulo}
          >
            <View style={styles.listingMarker}>
              <Text style={styles.markerText}>${item.preco / 1000}k</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.topContainer}>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, { marginRight: 5 }]}>Surabaya, Indonesia</Text>
          <MaterialCommunityIcons name="chevron-down" size={18} color={colors.text} />
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchList')} style={styles.searchRow}>
            <Text style={styles.searchText}>Search</Text>
            <View style={{ flex: 1 }} />
            <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>
            <MaterialCommunityIcons name="filter-variant" size={24} color={colors.button} />
          </TouchableOpacity>
        </View>
      </View>

      {featuredListing && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: colors.background, borderRadius: 30 }}

        >
          <BottomSheetView style={styles.bottomSheetContent}>
            <ListingCard
            style={{width: '100%'}}
              listing={{
                id: featuredListing.id,
                title: featuredListing.titulo,
                location: `${featuredListing.endereco.cidade}, ${featuredListing.endereco.estado}`,
                price: `${featuredListing.endereco.preco.toLocaleString('en-US')}`,
                period: '/ month',
                rating: 4.5,
                image: featuredListing.fotos[0],
                type: featuredListing.imovelType === 'Casa' ? 'House' : 'Apartment',
              }}
              onPress={() => {}}
            />
          </BottomSheetView>
        </BottomSheet>
      )}

      
    </View>
  )
}

export default SearchMapScreen