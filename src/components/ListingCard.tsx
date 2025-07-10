import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { createStyles } from './ListingCard.styles';

export interface Listing {
  id: string;
  title: string;
  location: string;
  price: string;
  period: string;
  rating: number;
  image: any;
  type: string;
}

interface ListingCardProps {
  listing: Listing;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, onPress, onLongPress, style }) => {
  const colors = useTheme();
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.listingCard, style]}
    >
      <Image source={listing.image} style={styles.listingImage} />

      <View style={styles.listingRatingContainer}>
        <MaterialCommunityIcons name="star" size={14} color={colors.star} />
        <Text style={styles.listingRatingText}>{listing.rating}</Text>
      </View>

      <View style={styles.listingInfo}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 4,
          }}
        >
          <View style={styles.listingTypeLabel}>
            <Text style={styles.listingTypeLabelText}>{listing.type}</Text>
          </View>

          <View style={styles.listingPriceContainer}>
            <Text style={styles.listingPrice}>{listing.price}</Text>
            <Text style={styles.listingPeriod}>{listing.period}</Text>
          </View>
        </View>

        <Text style={styles.listingTitle}>{listing.title}</Text>

        <View style={styles.listingLocationAndHeartContainer}>
          <View style={styles.listingLocationContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={14}
              color={colors.button}
            />
            <Text style={styles.listingLocationText}>
              {listing.location}
            </Text>
          </View>

          <TouchableOpacity style={styles.heartIconContainer}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color={colors.button}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
