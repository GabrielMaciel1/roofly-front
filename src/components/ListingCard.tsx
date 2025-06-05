import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface ListingCardProps {
  item: any
  colors: any
  cardStyles: any
}

export const ListingCard: React.FC<ListingCardProps> = ({ item, colors, cardStyles }) => {
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <View style={[cardStyles.listingCard, { backgroundColor: colors.card }]}> 
      <Image source={item.fotos[0]} style={cardStyles.listingCardImage} />
      <View style={cardStyles.ratingBadge}>
        <MaterialCommunityIcons name="star" size={14} color="#FFC107" />
        <Text style={cardStyles.ratingText}>4.5</Text>
      </View>
      <View style={cardStyles.listingCardContent}>
        <View style={cardStyles.topRow}>
          <View style={[cardStyles.imovelTypeBadge, { backgroundColor: colors.button }]}> 
            <Text style={[cardStyles.imovelTypeText, { color: colors.buttonText || '#FFFFFF' }]}>{item.imovelType}</Text>
          </View>
          <Text style={[cardStyles.priceText, { color: colors.button }]}> 
            {formatPrice(item.preco)}
            {item.tipo === 'Aluguel' && <Text style={{ fontSize: 12, color: colors.description }}> /mês</Text>}
          </Text>
        </View>
        <Text style={[cardStyles.titleText, { color: colors.text }]} numberOfLines={1} ellipsizeMode="tail">
          {item.titulo}
        </Text>
        <View style={cardStyles.locationRow}>
          <MaterialCommunityIcons name="map-marker-outline" size={14} color={colors.description} />
          <Text style={[cardStyles.locationText, { color: colors.description }]} numberOfLines={1} ellipsizeMode="tail">
            {`${item.endereco.bairro}, ${item.endereco.cidade}`}
          </Text>
          <TouchableOpacity style={cardStyles.favoriteIcon}>
            <MaterialCommunityIcons name="heart-outline" size={22} color={colors.description} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}