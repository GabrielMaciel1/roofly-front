import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import useTheme from '../theme/ThemeContext';
import { createCarouselStyles } from '../styles/CarouselScreen.styles';

const slides = [
  {
    key: '1',
    title: 'O Maior Marketplace de Imóveis do Brasil',
    description: 'Descubra uma plataforma completa onde residências, escritórios comerciais e terrenos aguardam por você. Conectamos quem anuncia e quem busca, transformando sonhos em oportunidades reais.',
    image: require('../../assets/carousel1.jpg'),
  },
  {
    key: '2',
    title: 'Encontre Espaços que Inspiram',
    description: 'De lofts modernos a galpões comerciais, terrenos urbanos ou rurais — explore milhares de opções selecionadas. Cada anúncio é uma chance de reinventar seu espaço, seja para viver, trabalhar ou investir.',
    image: require('../../assets/carousel2.jpg'),
  },
  {
    key: '3',
    title: 'Sua Negociação, Seu Controle',
    description: 'Interaja diretamente com proprietários e corretores, agende visitas e negocie condições de forma transparente. Aqui, você tem o poder de fechar o melhor negócio com total confiança.',
    image: require('../../assets/carousel3.jpg'),
  },
];

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Carousel'>;
};

const CarouselScreen: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const colors = useTheme();
  const styles = createCarouselStyles(colors);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => navigation.replace('Login');

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        extraData={currentIndex}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.dotsContainer}>
                {slides.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      {
                        width: currentIndex === i ? 16 : 8,
                        backgroundColor: currentIndex === i ? colors.activeDot : colors.dot,
                      },
                    ]}
                  />
                ))}
              </View>
              <TouchableOpacity onPress={handleSkip}>
                <Text style={styles.skip}>Pular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextText}>
                  {currentIndex === slides.length - 1 ? 'Começar' : 'Próximo'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CarouselScreen;
