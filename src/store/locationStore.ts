import { create } from 'zustand';
import * as Location from 'expo-location';

interface LocationState {
  location: Location.LocationObject | null;
  locationErrorMsg: string | null;
  loading: boolean;
  requestLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  locationErrorMsg: null,
  loading: false,
  requestLocation: async () => {
    set({ loading: true });
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        set({ locationErrorMsg: 'Permission to access location was denied', loading: false });
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      set({ location: currentLocation, loading: false });
    } catch (error) {
      set({ locationErrorMsg: 'Error getting location', loading: false });
    }
  },
}));
