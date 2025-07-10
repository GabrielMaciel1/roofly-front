import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { api, anotherApi } from '../utils/api';
import ListingCard, { Listing } from '../components/ListingCard';
import { useTheme } from '../contexts/ThemeContext';
import { createFavoriteScreenStyles } from '../styles/FavoriteScreen.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type FavoriteScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Favorite'>;
};

const FavoriteScreen: React.FC<FavoriteScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createFavoriteScreenStyles(colors);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedListingToRemove, setSelectedListingToRemove] = useState<Listing | null>(null);

  const filters = ['All', 'House', 'Villa', 'Apartment'];

  const [currentFavoritedListings, setCurrentFavoritedListings] = useState<Listing[]>(
    [...api, ...anotherApi].map(item => ({
      id: item.id,
      title: item.titulo,
      location: `${item.endereco.cidade}, ${item.endereco.estado}`,
      price: `R${item.preco.toLocaleString('pt-BR')}`,
      period: item.tipo === 'Aluguel' ? '/mês' : '',
      rating: 4.5,
      image: item.fotos[0],
      type: item.imovelType === 'Casa' ? 'House' : 'Apartment',
    }))
  );

  const handleRemoveFavorite = () => {
    if (selectedListingToRemove) {
      setCurrentFavoritedListings(currentFavoritedListings.filter(item => item.id !== selectedListingToRemove.id));
      setModalVisible(false);
      setSelectedListingToRemove(null);
    }
  };

  const openRemoveModal = (listing: Listing) => {
    setSelectedListingToRemove(listing);
    setModalVisible(true);
  };

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
          {currentFavoritedListings.length > 0 ? (
            currentFavoritedListings.map(listing => (
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
        onRequestClose={() => setModalVisible(false)}
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
                onPress={() => setModalVisible(false)}
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