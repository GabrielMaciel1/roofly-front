import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font'; // Import Font
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

import AppNavigator from './src/navigation/AppNavigator';


import { ThemeProvider } from './src/contexts/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<'Home' | 'Carousel'>('Carousel');

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync(Ionicons.font);

        const user = await AsyncStorage.getItem('user');
        setInitialRoute(user ? 'Home' : 'Carousel');
      } catch (error) {
        console.error('Erro durante a preparação do app:', error);
        Alert.alert('Erro de inicialização', 'Ocorreu um erro ao carregar o aplicativo.');
        setInitialRoute('Carousel');
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.error('Erro ao esconder splash screen:', e);
      }
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AppNavigator initialRouteName={initialRoute} />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

