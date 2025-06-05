import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import useTheme from '../theme/useTheme'
import { createSearchStyles } from '../styles/SearchScreen.styles'
import { useSearchScreen } from '../hooks/useSearchScreen'
import { SearchAutocomplete } from '../components/SearchAutocomplete'
import { ListingCard } from '../components/ListingCard'

const mapDarkStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1E1E1E' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#FFFFFF' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }, { weight: 2 }] },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#3C3C3C' }, { weight: 1.5 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#FFFFFF' }],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#2E2E2E' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#383838' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#252525' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#151515' }],
  },
]

const SearchScreen = () => {
  const colors = useTheme()
  const styles = createSearchStyles(colors)
  // cardStyles é reutilizado do styles padrão
  const cardStyles = styles
  const {
    location,
    search,
    setSearch,
    filteredLocations,
    showAutocomplete,
    setShowAutocomplete,
    region,
    setRegion,
    nearbyListings,
    bottomSheetRef,
    snapPoints,
    handleLocationSelect,
  } = useSearchScreen()

  const renderListingItem = ({ item }: { item: any }) => (
    <ListingCard item={item} colors={colors} cardStyles={cardStyles} />
  )

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region}
        customMapStyle={mapDarkStyle}
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
            <View style={{ backgroundColor: colors.button, borderRadius: 20, padding: 6, borderWidth: 2, borderColor: '#fff' }}>
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
            <View style={{ backgroundColor: colors.button, borderRadius: 10, padding: 4, borderWidth: 2, borderColor: '#fff' }}>
              <MaterialCommunityIcons name="home" size={16} color="#fff" />
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={[styles.searchCardTop, { backgroundColor: colors.background, borderColor: colors.border }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <MaterialCommunityIcons name="map-marker" size={20} color={colors.button} />
          <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginLeft: 6 }}>
            {location ? `${location.coords.latitude.toFixed(2)}, ${location.coords.longitude.toFixed(2)}` : 'Buscando localização...'}
          </Text>
        </View>
        <View style={styles.searchRow}>
          <MaterialCommunityIcons name="magnify" size={20} color={colors.description} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Pesquisar Localização"
            placeholderTextColor={colors.description}
            value={search}
            onChangeText={setSearch}
            onFocus={() => setShowAutocomplete(true)}
            onBlur={() => setTimeout(() => setShowAutocomplete(false), 100)}
          />
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons name="tune" size={22} color={colors.buttonText} />
          </TouchableOpacity>
        </View>
        <SearchAutocomplete
          visible={showAutocomplete}
          data={filteredLocations}
          onSelect={handleLocationSelect}
          colors={colors}
          styles={styles}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: colors.background, borderTopWidth: 1, borderTopColor: colors.border, borderRadius: 50 }}
      >
        <BottomSheetView style={{ flex: 1, paddingBottom: 60 }}>
          <Text style={[styles.sectionTitle, { color: colors.title, marginHorizontal: 16, marginTop: 8, marginBottom: 16 }]}>Próximos de você</Text>
          <FlatList
            data={nearbyListings.slice(0, 5)}
            keyExtractor={item => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 6 }}
            renderItem={renderListingItem}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

export default SearchScreen