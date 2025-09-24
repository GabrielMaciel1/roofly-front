import { useState } from 'react';
import { useFavoritesStore } from '../store/favoritesStore';
import { Listing } from '../components/ListingCard';

export const useFavoriteScreen = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedListingToRemove, setSelectedListingToRemove] = useState<Listing | null>(null);
  const { favorites, removeFavorite } = useFavoritesStore();

  const filters = ['All', 'House', 'Villa', 'Apartment'];

  const handleRemoveFavorite = () => {
    if (selectedListingToRemove) {
      removeFavorite(selectedListingToRemove.id);
      setModalVisible(false);
      setSelectedListingToRemove(null);
    }
  };

  const openRemoveModal = (listing: Listing) => {
    setSelectedListingToRemove(listing);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    activeFilter,
    setActiveFilter,
    isModalVisible,
    selectedListingToRemove,
    favorites,
    filters,
    handleRemoveFavorite,
    openRemoveModal,
    closeModal,
  };
};
