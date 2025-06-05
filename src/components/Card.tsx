import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';





import { cardStyles } from '../styles/Card.styles';

const Card = ({ data }: { data: any }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('Details', { data });
  };

  return (
    <Pressable onPress={handlePress} style={cardStyles.card}>
      <View style={cardStyles.favoriteIconContainer}>
          <MaterialCommunityIcons
            name={data.isFavorited ? 'heart' : 'heart-outline'}
            size={24}
            color={data.isFavorited ? 'red' : 'black'}
          />
        </View>
        <Image source={data.fotos[0]} alt='casa' style={cardStyles.image} />
      <View style={cardStyles.content}>
        <View style={cardStyles.badgeContainer}>
          <View style={cardStyles.badge}>
            <Text style={cardStyles.badgeText}>{data.imovelType}</Text>
          </View>
          <Text style={cardStyles.price}>
            {data.tipo === 'Venda' ? `R$ ${data.preco.toLocaleString()}` : `R$ ${data.preco.toLocaleString()} / mês`}
          </Text>
        </View>
        <Text style={cardStyles.title}>{data.titulo}</Text>
        <View style={{ flexDirection: 'row', gap: 5, marginBottom: 5, marginTop: 5 }}>
          <FontAwesome6 name="location-dot" size={20} />
          <Text>{`${data.endereco.bairro} - ${data.endereco.cidade}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
