import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import ListingCard from '../components/ListingCard';
import { useTheme } from '../contexts/ThemeContext';
import { createFavoriteScreenStyles } from '../styles/FavoriteScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFavoriteScreen } from '../hooks/useFavoriteScreen';

type FavoriteScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Favorite'>;
};

const FavoriteScreen: React.FC<FavoriteScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createFavoriteScreenStyles(colors);
  const {
    activeFilter,
    setActiveFilter,
    isModalVisible,
    selectedListingToRemove,
    favorites,
    filters,
    handleRemoveFavorite,
    openRemoveModal,
    closeModal,
  } = useFavoriteScreen();

  return (
    <View style={styles.highlightsContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="magnify" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <MaterialCommunityIcons name="tune" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.filterContainer}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterOption, activeFilter === filter && styles.activeFilterOption]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterText, activeFilter === filter && styles.activeFilterText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.listingListContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {favorites.length > 0 ? (
            favorites.map(listing => (
              <ListingCard
                  key={listing.id}
                  listing={listing}
                  onPress={() => navigation.navigate('PropertyDetails', { propertyId: listing.id })}
                  onLongPress={() => openRemoveModal(listing)}
                  style={{ marginBottom: 16 }}
                />
            ))
          ) : (
            <View style={styles.noFavoritesContainer}>
              <Text style={styles.noFavoritesText}>Você ainda não tem nenhum imóvel favorito.</Text>
            </View>
          )}
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedListingToRemove && (
              <ListingCard
                listing={selectedListingToRemove}
                onPress={() => {}}
                style={{ marginBottom: 20 }}
              />
            )}
            <Text style={styles.modalTitle}>Remove from favorite?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={closeModal}
              >
                <Text style={[styles.modalButtonText, styles.modalCancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalRemoveButton]}
                onPress={handleRemoveFavorite}
              >
                <Text style={[styles.modalButtonText, styles.modalRemoveButtonText]}>Yes, Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FavoriteScreen;
