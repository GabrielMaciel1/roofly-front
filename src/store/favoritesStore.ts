import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Listing } from '../components/ListingCard';

interface FavoritesState {
  favorites: Listing[];
  addFavorite: (listing: Listing) => void;
  removeFavorite: (listingId: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (listing) => set((state) => ({ favorites: [...state.favorites, listing] })),
      removeFavorite: (listingId) =>
        set((state) => ({ favorites: state.favorites.filter((fav) => fav.id !== listingId) })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
