import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { createStyles } from '../styles/PropertyDetailsScreen.styles';
import { api } from '../utils/api';
import MapView, { Marker } from 'react-native-maps';
import { useQuery } from '@tanstack/react-query';

type Props = NativeStackScreenProps<RootStackParamList, 'PropertyDetails'>;

const fetchPropertyDetails = async (propertyId: string) => {
  const { data } = await api.get(`/properties/${propertyId}`);
  return data;
};

const PropertyDetailsScreen: React.FC<Props> = ({ route }) => {
  const { propertyId } = route.params;

  const colors = useTheme();
  const styles = createStyles(colors);

  const { data: property, isLoading, isError, error } = useQuery({
    queryKey: ['propertyDetails', propertyId],
    queryFn: () => fetchPropertyDetails(propertyId),
  });

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.button} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error?.message || 'Não foi possível carregar os detalhes do imóvel.'}</Text>
      </View>
    );
  }

  if (!property) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Imóvel não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={property.fotos}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.headerImage} />
        )}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{property.titulo}</Text>
        <Text style={styles.location}>{`${property.endereco.rua}, ${property.endereco.cidade}`}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.price}>{`R$ ${property.preco.toLocaleString('pt-BR')}`}</Text>
          <Text style={styles.period}>{property.tipo === 'Aluguel' ? '/mês' : ''}</Text>
        </View>
        <View style={styles.ownerContainer}>
          <Image source={require('../../assets/perfil.jpeg')} style={styles.ownerImage} />
          <View>
            <Text style={styles.ownerName}>Gabriel Maciel</Text>
            <Text style={styles.ownerRole}>Proprietário</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>Ligar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{property.descricao}</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: property.localizacao.latitude,
              longitude: property.localizacao.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: property.localizacao.latitude,
                longitude: property.localizacao.longitude,
              }}
            />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
};

export default PropertyDetailsScreen;