import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { createStyles } from '../styles/PropertyDetailsScreen.styles';
import { api } from '../utils/api';
import MapView, { Marker } from 'react-native-maps';

type Props = NativeStackScreenProps<RootStackParamList, 'PropertyDetails'>;

const PropertyDetailsScreen: React.FC<Props> = ({ route }) => {
  const { propertyId } = route.params;
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const colors = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/properties/${propertyId}`);
        setProperty(response.data);
      } catch (err) {
        console.error('Erro ao buscar propriedade:', err);
        setError('Não foi possível carregar os detalhes do imóvel.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
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
