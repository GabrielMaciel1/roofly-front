import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface NoListingsFoundProps {
  imageSource: any;
  mainMessage: string;
  subMessage?: string;
  imageSize?: number;
}

const NoListingsFound: React.FC<NoListingsFoundProps> = ({ imageSource, mainMessage, subMessage, imageSize = 120 }) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      width: '90%',
      alignSelf: 'center',
      minHeight: 150,
    },
    icon: {
      width: imageSize,
      height: imageSize,
      marginRight: 16,
      resizeMode: 'contain',
    },
    messageContainer: {
      flex: 1,
    },
    mainMessage: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    subMessage: {
      fontSize: 16,
      color: colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.icon} />
      <View style={styles.messageContainer}>
        <Text style={styles.mainMessage}>{mainMessage}</Text>
        {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}
      </View>
    </View>
  );
};

export default NoListingsFound;