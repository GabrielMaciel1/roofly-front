import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { api } from '../utils/api';
import ListingCard from '../components/ListingCard';
import useTheme from '../theme/ThemeContext';
import { createSavedScreenStyles } from '../styles/SavedScreen.styles';

type SavedScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Saved'>;
};

const Saved: React.FC<SavedScreenProps> = ({ navigation }) => {
  const colors = useTheme();
  const styles = createSavedScreenStyles(colors);

  const favoritedListings = api.slice(0, 3).map(item => ({
    id: item.id,
    title: item.titulo,
    location: `${item.endereco.cidade}, ${item.endereco.estado}`,
    price: `R$${item.preco.toLocaleString('pt-BR')}`,
    period: item.tipo === 'Aluguel' ? '/mês' : '',
    rating: 4.5,
    image: item.fotos[0],
    type: item.imovelType === 'Casa' ? 'House' : 'Apartment',
  }));

  return (
    <View style={styles.highlightsContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favoritos</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {favoritedListings.length > 0 ? (
          favoritedListings.map(listing => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onPress={() => navigation.navigate('PropertyDetails', { propertyId: listing.id })}
            />
          ))
        ) : (
          <View style={styles.noFavoritesContainer}>
            <Text style={styles.noFavoritesText}>Você ainda não tem nenhum imóvel favorito.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Saved;