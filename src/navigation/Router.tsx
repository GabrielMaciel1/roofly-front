import React from 'react';
import { useAuthStore } from '../store/authStore';
import AppNavigator from './AppNavigator';
import { View, ActivityIndicator } from 'react-native';

const Router = () => {
  const { token, isLoading } = useAuthStore();

  if (isLoading) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" /></View>;
  }

  const initialRoute = token ? 'Home' : 'Carousel';

  return <AppNavigator initialRouteName={initialRoute} />;
};

export default Router;
