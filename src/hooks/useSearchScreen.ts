import { useState, useEffect, useRef, useMemo } from 'react'
import * as Location from 'expo-location'
import { Keyboard, Dimensions } from 'react-native'
import { api } from '../utils/api'

const { height } = Dimensions.get('window')
const TAB_BAR_HEIGHT = 60

export function useSearchScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [search, setSearch] = useState('')
  const [filteredLocations, setFilteredLocations] = useState<string[]>([])
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [region, setRegion] = useState({
    latitude: -3.7327,
    longitude: -38.527,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  })
  const [nearbyListings, setNearbyListings] = useState<any[]>([])
  const bottomSheetRef = useRef(null)

  const contentSnapPoints = useMemo(() => ['45%', '60%'], [])
  const snapPoints = useMemo(
    () =>
      contentSnapPoints.map(point => {
        if (typeof point === 'string' && point.endsWith('%')) {
          return (height * (parseFloat(point) / 100)) + TAB_BAR_HEIGHT
        }
        return point as number + TAB_BAR_HEIGHT
      }),
    []
  )

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return
      const loc = await Location.getCurrentPositionAsync({})
      setLocation(loc)
      if (!loc || !loc.coords) {
        return;
      }
      const initialRegion = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
      setRegion(initialRegion)
      const listingsWithCoords = api.map(item => ({
        ...item,
        lat: item.localizacao?.latitude || initialRegion.latitude + (Math.random() - 0.5) * 0.04,
        lng: item.localizacao?.longitude || initialRegion.longitude + (Math.random() - 0.5) * 0.04,
      }))
      setNearbyListings(listingsWithCoords)
      const suggestions = Array.from(new Set(listingsWithCoords.map(l => `${l.endereco.bairro}, ${l.endereco.cidade}`)))
      setFilteredLocations(suggestions)
    })()
  }, [])

  useEffect(() => {
    if (search.length > 0) {
      setShowAutocomplete(true)
      const suggestions = Array.from(new Set(nearbyListings.map(l => `${l.endereco.bairro}, ${l.endereco.cidade}`)))
      setFilteredLocations(suggestions.filter(locItem => locItem.toLowerCase().includes(search.toLowerCase())))
    } else {
      setShowAutocomplete(false)
      const suggestions = Array.from(new Set(nearbyListings.map(l => `${l.endereco.bairro}, ${l.endereco.cidade}`)))
      setFilteredLocations(suggestions)
    }
  }, [search, nearbyListings])

  const handleLocationSelect = (selectedLocation: string) => {
    setSearch(selectedLocation)
    setShowAutocomplete(false)
    Keyboard.dismiss()
  }

  return {
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
  }
}